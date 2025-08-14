import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { useGlobalContext } from "./context";

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_API_KEY}&query=${searchTerm}`
      );
      queryClient;
      return result.data;
    },
  });
  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (isError) {
    return <div>There was an error ...</div>;
  }

  if (data?.results.length < 1) return <div>No image found</div>;
  return (
    <section className="image-container">
      {data?.results?.map((img) => {
        return (
          <img
            key={img.id}
            src={img?.urls?.regular}
            className="img"
            alt={img.alt_description}
          ></img>
        );
      })}
    </section>
  );
};
export default Gallery;
