import React from "react";

function UserInformation({ ...props }) {
  const { userInfo } = props;
  return (
    <div className="card">
      <div class="card flex-md-row mb-4 shadow-sm h-md-250">
        <div class="card-body d-flex flex-column align-items-start">
          <strong class="d-inline-block mb-2 text-primary">
            {userInfo.name}
          </strong>

          <div class="mb-1 text-muted small"> {userInfo.login}</div>
          <p class="card-text mb-2">Company: {userInfo.company}</p>
          <p class="card-text mb-2">
            <i class="fa fa-users" aria-hidden="true"></i> {userInfo.followers}{" "}
            followers
          </p>

          <a
            class="btn btn-outline-primary btn-sm"
            role="button"
            href={userInfo.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github LINK
          </a>
        </div>
        <img
          class="card-img-right flex-auto d-none d-lg-block"
          alt="Thumbnail [200x250]"
          src={userInfo.avatar_url}
          style={{ width: 200 }}
        />
      </div>
    </div>
  );
}

export default UserInformation;
