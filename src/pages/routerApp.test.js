import React from "react";
import { withRouter } from "react-router";
import { Link, Route, Router, Switch, useParams } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";

const Home = () => <h1>Home page</h1>;
const About = () => <h1>About page</h1>;

const Profile = () => {
    const { name } = useParams();
    return <h1 data-testid="profile-name">{name}</h1>;
};

const LocationDisplay = withRouter(({ location }) => (
    <div data-testid="location-display">{location.pathname}</div>
));

const NAME = "Oleg";

const RouterComponent = () => (
    <>
        <nav data-testid="navbar">
            <Link data-testid="home-link" to="/">
                General
            </Link>
            <Link data-testid="about-link" to="/about">
                Information
            </Link>
            <Link data-testid="profile-link" to={`/profile/${NAME}`}>
                Profile
            </Link>
        </nav>

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profile:name" component={Profile} />
        </Switch>

        <LocationDisplay />
    </>
);

const renderWithRouter = (
    component,
    {
        route = "/",
        history = createMemoryHistory({ initialEntries: [route] }),
    } = {}
) => {
    const Wrapper = ({ children }) => (
        <Router history={history}>{children}</Router>
    );
    return {
        ...render(component, { wrapper: Wrapper }),
        history,
    };
};

describe("React Router", () => {
    it("should render the home page", () => {
        // const history = createMemoryHistory();
        // const { container, getByTestId } = render(
        //   <Router history={history}>
        //     <RouterComponent />
        //   </Router>
        // );
        const { container, getByTestId } = renderWithRouter(<RouterComponent />);
        const navbar = getByTestId("navbar");
        const link = getByTestId("home-link");
        expect(container.innerHTML).toMatch("Home page");
        expect(navbar).toContainElement(link);
    });

    it("should navigate to the contact page", () => {
        // const history = createMemoryHistory();
        // const { container, getByTestId } = render(
        //   <Router history={history}>
        //     <RouterComponent />
        //   </Router>
        // );
        const { container, getByTestId } = renderWithRouter(<RouterComponent />);
        fireEvent.click(getByTestId("profile-link"));
        expect(container.innerHTML).toMatch("Oleg");
    });

    it("rendering a component that uses withRouter", () => {
        // const history = createMemoryHistory();
        // const route = "/some-route";
        // history.push(route);
        // const { getByTestId } = render(
        //   <Router history={history}>
        //     <LocationDisplay />
        //   </Router>
        // );
        const route = "/some-route";
        const { getByTestId } = renderWithRouter(<LocationDisplay />, { route });
        expect(getByTestId("location-display")).toHaveTextContent(route);
    });
});
