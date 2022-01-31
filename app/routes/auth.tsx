import { redirect, json, Form, useActionData } from "remix";

export async function action({ request }) {
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");
  const errors = {
    username: "",
    password: "",
  };
  if (!username) {
    errors.username = "Username is required";
  }

  if (!password) {
    errors.password = "Password is required";
  }
  if (typeof password !== "string" || password.length < 6) {
    errors.password = "Password must be > 6 characters";
  }

  if (Object.keys(errors).length) {
    return json(errors, { status: 422 });
  }
  return redirect("/yes");
}

export default function Signup() {
  const errors = useActionData();

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="border border-rose-700/50 shadow shadow-rose-800 max-w-2xl px-5 py-5 rounded-lg slide-in-elliptic-top-fwd">
          {errors && (
            <>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-lg text-rose-300 font-bold slide-in-elliptic-top-fwd">
                  {errors?.password ? <span>{errors.password}</span> : null}
                </h1>
                <h1 className="text-lg text-rose-300 font-bold slide-in-elliptic-top-fwd">
                  {errors?.username ? <span>{errors.username}</span> : null}
                </h1>
              </div>
            </>
          )}
          <Form method="post">
            <div className="">
              <div className="grid grid-cols-2 space-x-2">
                <p>
                  <input
                    type="text"
                    name="user"
                    placeholder="Username"
                    className="bg-transparent border border-rose-800 px-2 py-2 rounded-lg focus:outline-none text-rose-50 placeholder:text-rose-100"
                    {...(errors?.username ? { autoComplete: "off" } : {})}
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    className="bg-transparent border border-rose-800 px-2 py-2 rounded-lg focus:outline-none text-rose-50 placeholder:text-rose-100"
                    {...(errors?.password ? { autoComplete: "off" } : {})}
                  />
                </p>
              </div>
              <div className="flex justify-center items-center mt-5">
                <button
                  type="submit"
                  className="bg-rose-600 px-5 py-2 rounded-lg border-b-2 hover:border-b-4 transition-all border-rose-800 hover:scale-105 focus:outline-none"
                >
                  <span className=" font-black text-rose-50">Sign up</span>
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
