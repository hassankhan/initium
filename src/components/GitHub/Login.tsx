import * as React from 'react';

class Login extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <input name="username" />
        <input name="password" type="password" />
      </div>
    );
  }
}

export default Login;
