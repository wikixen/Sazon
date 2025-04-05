import { useForm } from "@tanstack/react-form";
import "./Auth.css";

export default function Login() {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

  return (
    <section className="authCard">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <form.Field
          name="username"
          children={(field) => (
            <label htmlFor="userForm">
              Email or Username<br />
              <input
                id="userForm"
                type="text"
                name="userForm"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </label>
          )}
        />
        <form.Field
          name="password"
          children={(field) => (
            <div>
              <label htmlFor="pwForm">
                Password<br />
                <input
                  id="pwForm"
                  type="password"
                  name="pwForm"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </label>
            </div>
          )}
        />
        <button type="submit" onClick={form.handleSubmit} className="loginBtn">
          Sign In
        </button>
      </form>
      <a className="authLink">Forgot Password?</a>
      <a className="authLink">Sign Up here?</a>
    </section>
  );
}
