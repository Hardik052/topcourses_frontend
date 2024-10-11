import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const[category, setCategory] = useState(filterData[0].title)

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json(); // Corrected by adding 'await' here

      setCourses(output.data); // Set courses with the output data

    } catch (e) {
      toast.error("Network Error");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to call fetchData only once on mount

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="bg-bgDark2 min-h-screen">
        <Filter filterData={filterData}
        category={category}
        setCategory={setCategory} />
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-col flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? (
            <Spinner />
          ) : (
            <Cards courses={courses} category={category} /> // Pass the courses data to Cards component
          )}
        </div>
      </div>

        </div>

    </>
  );
};

export default App;
