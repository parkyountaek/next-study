import fetch from 'isomorphic-unfetch';
import Profile from '../../components/Profile';
import formatDistance from 'date-fns/formatDistance';

const style = `
  .user-contents-wrapper {
    display: flex;
    padding: 20px;
  }
  .repos-wrapper {
    width: 100%;
    height: 100vh;
    overflow: scroll;
    padding: 0px 16px;
  }
  .repos-header {
    padding: 16px 0;
    font-size: 14px;
    font-weight: 600;
    border-bottom: 1px solid #ele4e8;
  }
  .repos-count {
    display: inline-block;
    padding: 2px 5px;
    margin-left: 6px;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    color: #586069;
    background-color: rgba(27, 31, 35, 0.08);
    border-radius: 20px;
  }
  .repository-wrapper {
    width: 100%;
    border-bottom: 1px solid #e1e4e8;
    padding: 24px 0;
  }
  .repository-description {
    padding: 12px 0;
  }
  a {
    text-decoration: none;
  }
  .repository-name {
    margin: 0;
    color: #0366d6;
    font-size: 20px;
    display: inline-block;
    cursor: pointer;
  }
  .repository-name:hover {
    text-decoration: underline;
  }
  .repository-description {
    margin: 0;
    font-size: 14px;
  }
  .repository-language {
    margin: 0;
    font-size: 14px;
  }
  .repository-updated-at {
    margin-left: 20px;
  }
`;

const name = ({user, repos}) => {
  return (
    <div className="user-contents-wrapper">
      <Profile user={user, repos}/>
      <div className="repos-wrapper">
        <div className="repos-header">
          Repositories
          <span className="repos-count">{user.public_repos}</span>
        </div>
        {user && repos &&
          repos.map((repo) => (
            <div key={repo.id} className="repository-wrapper">
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://github.com/${user.login}/${repo.name}`}
              >
                <h2 className="repository-name">{repo.name}</h2>
              </a>
              <p className="repository-description">{repo.description}</p>
              <p className="repository-language">
                {repo.language}
                <span className="repository-updated-at">
                  {formatDistance(new Date(repo.updated_at), new Date(), {addSuffix: true,})}
                </span>
              </p>
            </div>
          ))
        }
      </div>
      <style jsx>{style}</style>
    </div>
  );
}

export const getServerSideProps = async ({query}) => {
  const {name} = query;
  let user;
  let repos
  try {
    const userRes = await fetch(`https://api.github.com/users/${name}`);
    if(userRes.status === 200) {
      user = await userRes.json();
    }
    const repoRes = await fetch(`https://api.github.com/users/${name}/repos?sort=updated&page=${1}&per_page=10`);
    if(repoRes.status === 200) {
      repos = await repoRes.json();
    }
    console.log(repos)
    return { props: { user, repos }}
  } catch(e){
    console.log(e)
    return { props: { }}
  }
}
export default name;