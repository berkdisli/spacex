import { IResultProps } from "../types/Home";
function Detail({ result }: { result: IResultProps }) {
  return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Details
              </th>
              <th scope="col" className="px-6 py-3">
                Launch Status
              </th>
              <th scope="col" className="px-6 py-3">
                Patch
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 px-6 py-3">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {result.name}
              </th>
              <td className="px-6 py-4">
                {result.details ? (
                  <h1>{result.details}</h1>
                ) : (
                  <h1>No Details</h1>
                )}
              </td>
              <td className="px-6 py-4">
                {result.success ? (
                  <h1>Successful Launch</h1>
                ) : (
                  <h1>Unsuccessful Launch</h1>
                )}
              </td>
              <td className="px-6 py-4">
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
  );
}

export default Detail;
