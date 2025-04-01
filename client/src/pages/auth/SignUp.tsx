import { useForm } from "@tanstack/react-form";
import "./Auth.css";

export default function SignUp() {
  const form = useForm({
    defaultValues: {
      email: "",
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
        }}
      >
        <form.Field
          name="email"
          children={(field) => (
            <div>
              <label htmlFor="email">
                Email<br />
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </label>
            </div>
          )}
        />
        <form.Field
          name="username"
          children={(field) => (
            <div>
              <label htmlFor="username">
                Username<br />
                <input
                  id="username"
                  type="text"
                  name="username"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </label>
            </div>
          )}
        />
        <form.Field
          name="password"
          children={(field) => (
            <div>
              <label htmlFor="password">
                Password<br />
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </label>
            </div>
          )}
        />
        <button type="submit" onClick={form.handleSubmit} className="loginBtn">
          Sign Up
        </button>
      </form>
      <a className="authLink">Login Here</a>
    </section>
  );
}
