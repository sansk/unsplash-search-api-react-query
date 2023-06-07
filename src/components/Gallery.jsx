import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "../context/Context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_AccessKey
}&query=`;

export const Gallery = () => {
  const { searchVal } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchVal],
    queryFn: async () => {
      const result = await axios.get(`${url}${searchVal}`);
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section className="image-container">
        <div className="loading" style={{ margin: "0 20rem" }}></div>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There is an Error...</h4>
      </section>
    );
  }

  const { results } = response.data;

  if (results.length < 1) {
    return (
      <section className="image-container">
        <h2>
          No results found! <br /> Enter a different search term.
        </h2>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((image) => {
        const { id, alt_description, urls } = image;
        const url = urls?.regular;

        return <img key={id} src={url} alt={alt_description} className="img" />;
      })}
    </section>
  );
};
