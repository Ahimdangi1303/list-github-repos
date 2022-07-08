import React from "react";
import { BASE_URL } from "../../services";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function RepoList() {
  const navigate = useNavigate();
  const [repos, setRepos] = React.useState([
    {
      name: "",
      forks_count: "",
      stargazers_count: "",
      svn_url: "",
    },
    {
      name: "",
      forks_count: "",
      stargazers_count: "",
      svn_url: "",
    },
  ]);

  //  function to fetch all the repos

  const getRepos = () => {
    fetch(`${BASE_URL}`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setRepos(data.items);
      })
      .catch((error) => {
        console.log("error occured", error);
      });
  };

  React.useEffect(() => {
    getRepos();
  }, []);

  const renderTableHeader = () => {
    return (
      <>
        <th>Name</th>
        <th></th>
        <th></th>
        <th></th>
        <th>Stars</th>
        <th></th>
        <th></th>
        <th></th>
        <th>Forks</th>
      </>
    );
  };

  const renderTableData = () => {
    return repos.length
      ? repos.map((repo, index) => {
          console.log(repo, "curepo");
          return (
            <tr key={index}>
              <td>
                <a target="_blank" href={repo.svn_url}>
                  {repo.name}
                </a>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td>{repo.stargazers_count}</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{repo.forks_count}</td>
            </tr>
          );
        })
      : null;
  };

  return (
    <div className="first-container">
      <div className="first-row-div">
        <h1 id="title" className="post-text">
          List of Repos
        </h1>
      </div>
      <div className="table_div">
        <table className="table_style">
          <tbody>
            <tr>{renderTableHeader()}</tr>
            {renderTableData()}
          </tbody>
        </table>
      </div>
    </div>
  );
}
