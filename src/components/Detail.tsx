import { IResultProps } from "../types/Home";

const Detail = ({ result }: { result: IResultProps }) => {

  const theadElements = document.querySelectorAll('table thead');
  for (let i = 1; i < theadElements.length; i++) {
    theadElements[i].remove();
  }

  return (
    <div className="container">
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
        <th scope="col" className="column px-6 py-3">
            Flight Number
          </th>
          <th scope="col" className="column px-6 py-3">
            Name
          </th>
          <th scope="col" className="column px-6 py-3">
            Details
          </th>
          <th scope="col" className="column px-6 py-3">
            Launch Status
          </th>
          <th scope="col" className="column px-6 py-3">
            Patch
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 px-6 py-3 column">
        <td className="px-6 py-4 column">
            {result.flight_number}
          </td>
          <td
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white column"
          >
            {result.name}
          </td>
          <td className="details px-6 py-4 column">
            {result.details ? (
              <h1>{result.details}</h1>
            ) : (
              <h1>No Details</h1>
            )}
          </td>
          <td className="px-6 py-4 column">
            {result.success ? (
              <h1>Successful Launch</h1>
            ) : (
              <h1>Unsuccessful Launch</h1>
            )}
          </td>
         
          <td className="px-6 py-4 column">
            {
              <img
                src={result.links.patch.large}
                width={100}
                height={100}
              />
            }{" "}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
)
}

export default Detail;
