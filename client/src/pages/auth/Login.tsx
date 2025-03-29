import { useForm } from "@tanstack/react-form";

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
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <form.Field
          name="username"
          children={(field) => (
            <div>
              <label htmlFor="userForm">
                Username
                <input
                  id="userForm"
                  type="text"
                  name="userForm"
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
              <label htmlFor="pwForm">
                Password
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
        <button type="submit" onClick={form.handleSubmit}>Sign In</button>
      </form>
    </>
  );
}
