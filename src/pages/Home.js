import Hero from "../components/hero";

export default function  Home({ user }) {
    if (user) {
      return <Hero username={user.username}/>;

    } else {
      return <Hero/>;
    }
}