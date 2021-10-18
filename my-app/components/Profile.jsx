import css from "styled-jsx/css";
import { GoOrganization, GoLink, GoMail, GoLocation } from "react-icons/go";

const style = css`
  .profile-box {
    width: 25%;
    max-width: 272px;
    margin-right: 26px;
  }
  .profile-image-wrapper {
    width: 100%;
    bordker: 1px solid #ele4e8;
  }
  .profile-image-wrapper .profile-image {
    display: block;
    width: 100%;
  }
  .profile-username {
    margin: 0;
    pading-top: 16px;
    font-size: 26px;
  }
  .profile-user-login {
    margin: 0;
    font-size: 20px;
  }
  .profile-user-bio {
    margin: 0;
    padding-top: 16px;
    font-size: 14px;
  }
  .profile-user-ingo {
    display: flex;
    align-items: center;
    margin: 4px 0 0;
  }
  .profile-user-info-text {
    margin-left 6px;
  }
`

const Profile = ({user}) => {
  if (!user){
    return null;
  }
  return (
    <>
      <div className="profile-box">
        <div className="profile-image-wrapper">
          <img
            className="profile-image"
            src={user.avatar_url}
            alt={`${user.name} 프로필 이미지`}
          />
        </div>
        <h2 className="profile-username">{user.name}</h2>
        <p className="profile-user-login">{user.login}</p>
        {user.bio && 
          <p className="profile-user-bio">{user.bio}</p>
        }
        {user.company &&
          <p className="profile-user-info">
            <GoOrganization size={16} color="#6a737d"/>
            <span className="profile-user-info-text">{user.company}</span>
          </p>
        }
        {user.location && 
          <p className="profile-user-info">
            <GoLocation size={16} color="#6a737d"/>
            <span className="profile-user-info-text">{user.location}</span>
          </p>
        }
        {user.email && 
          <p className="profile-user-info">
            <GoMail size={16} color="#6a737d"/>
            <span className="profile-user-info-text">{user.email}</span>
          </p>
        }
        {user.blog &&
          <p className="profile-user-info">
            <GoLink size={16} color="#6a737d"/>
            <span className="profile-user-info-text">{user.blog}</span>
          </p>
        }
      </div>
      <style jsx>{style}</style>
    </>
  )
}

export default Profile;