import { useForm } from "@tanstack/react-form";

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
    <>
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
                Username
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
                Username
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
                Password
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
        <button type="submit" onClick={form.handleSubmit}>Sign In</button>
      </form>
    </>
  );
}
