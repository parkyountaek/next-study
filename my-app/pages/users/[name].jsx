import fetch from 'isomorphic-unfetch';
import Profile from '../../components/Profile';

const name = ({user, repos}) => {
  if(!user){
    return null;
  }
  return (
    <>
      <Profile user={user}/>
    </>
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
    const repoRes = await fetch(`https://api.github.com/users/${name}/repos?sort=updated&page=1&per_page=10`);
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