import React from "react";
import {
  Box,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Notes,
  Progress,
  Slide,
  Text,
} from "spectacle";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
  colors: {
    primary: "white",
    secondary: "#ebe5da",
    // Background
    tertiary: "#1b2230",
    // quaternary: "#ffc951",
    // quinary: "#8bddfd",
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const Presentation = () => (
  <Deck theme={theme} template={template}>
    {/* INTRO */}
    <Slide>
      <FlexBox height="100%">
        <Heading>
          Improve Your Application
          <br></br>
          State Management
          <br></br>
          with
          <br></br>
          React Query
        </Heading>
      </FlexBox>
      <Notes>
        <ul>
          <li>Hi all, thanks for joining my talk.</li>
          <li>
            My name is Tiago! Exactly 2 years ago I joined Cartrack as a
            frontend developer. More recently my work has been focused on the
            Tachograph project where I used React Query.
          </li>
          <li>
            In this presentation I will talk about state management in React
            applications and how React Query can help us improve it and have
            more control over our data-fetching.
          </li>
        </ul>
      </Notes>
    </Slide>

    {/* REACT QUERY */}
    <Slide>
      <Heading>React Query</Heading>
      <FlexBox height="100%" flexDirection="column">
        <Text>React Query is a data-fetching library</Text>
      </FlexBox>
      <Notes>
        <ul>
          <li>
            I'll start this talk by saying that React Query is not a state
            management library. It is a data-fetching library.
          </li>
          <li>
            You might be wondering, "Why would some data-fetching library
            improve our state management? What does one even have to do with the
            other?"
          </li>
          <li>
            I hope that at the end of this talk you don't have this question
            anymore
          </li>
        </ul>
      </Notes>
    </Slide>

    {/* STATE MANAGEMENT*/}
    <Slide
      backgroundColor="tertiary"
      backgroundImage="url('/wires.jpg')"
      backgroundOpacity={0.3}
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading>State Management</Heading>
      </FlexBox>
      <Notes>
        <ul>
          <li>Let's talk about state management</li>
          <li>
            Today many lines of code in our applications are dedicated to
            accessing and changing asynchronous data.
          </li>
          <li>
            Over the years, the approaches around accessing and manipulating the
            data in our applications have converged to use intensively what we
            all know as... global state.
          </li>
        </ul>
      </Notes>
    </Slide>

    {/* GLOBAL STATE */}
    <Slide>
      <Heading>Global State</Heading>
      <PaddedGrid gridTemplateColumns="1fr 1fr" gridTemplateRows="1fr">
        <Box style={{ justifySelf: "center", width: "80%" }}>
          <Text>Avoid prop drilling</Text>
          <Text>Easily access data</Text>
          <Text>Extremely powerful</Text>
        </Box>
        <Box
          style={{ justifySelf: "center" }}
          height={"min-content"}
          width={"min-content"}
        >
          <SyntaxHighlighter
            language="javascript"
            style={xonokai}
            codeTagProps={{
              style: {
                fontSize: "20px",
              },
            }}
          >
            {`const globalState = {
  theme: "dark",
  locale: "en",
  toasts: [],
  vehicles: [],
  drivers: [],
}`}
          </SyntaxHighlighter>
        </Box>
      </PaddedGrid>
      <Notes>
        <ul>
          <li>With global state...</li>
          <li>You can avoid prop drilling or lift state up to common parent</li>
          <li>You can easily access data</li>
          <li>
            It is extremely powerful for how easy it is to implement with many
            tools we have available such as Redux
          </li>
          <li>
            And because of that, we often fall into the error of storing all of
            our data in global state. And data from the server is no exception.
            We want our server data to be just as accessible as our global state
            so it is normal that our first instinct is to add our server-side
            data into global state
          </li>
          <li>
            Why is this wrong? If you think about it, it becomes obvious that
            server-side data has a different nature than client-side data.
          </li>
        </ul>
      </Notes>
    </Slide>

    {/* CLIENT VS SERVER */}
    <Slide>
      <Heading>Client vs Server</Heading>

      <PaddedGrid
        height="70%"
        style={{
          padding: "0px 29%",
          height: "min-content",
          alignItems: "center",
          justifyContent: "center",
        }}
        gridTemplateColumns="1fr"
        gridTemplateRows="1fr 1fr 1fr"
      >
        <Text>Storage</Text>
        <Text>Access speed</Text>
        <Text>How they are accessed</Text>
      </PaddedGrid>
      <Notes>
        <ul>
          <li>Where they're stored is different.</li>
          <li>Speed at which we access them is different</li>
          <li>How we access and update is different</li>
          <li>
            But despite these differences, many applications are still giving
            equal treatment to these 2 types of data by storing it in global
            state.
          </li>
          <li>
            In the last couple years, libraries focused on data-fetching are
            becoming more popular and attractive and are slowly changing the way
            we think about global state to the point where we should divide it
            into client state and server state.
          </li>
        </ul>
      </Notes>
    </Slide>

    {/* CLIENT STATE VS SERVER STATE*/}
    <Slide>
      <FlexBox flexDirection="column" height={"100%"}>
        <Heading>Client State</Heading>
        <hr style={{ width: "100%" }}></hr>
        <Heading>Server State</Heading>
      </FlexBox>
    </Slide>

    {/* CLIENT STATE */}
    <Slide>
      <FlexBox height="100%" alignItems="start">
        <div style={{ width: "100%" }}>
          <Heading>Client State</Heading>

          <Text style={{ textAlign: "center" }}>Local</Text>
          <Text style={{ textAlign: "center" }}>Temporary</Text>
          <Text style={{ textAlign: "center" }}>Synchronous</Text>
          <Text style={{ textAlign: "center" }}>Up-to-date</Text>
        </div>
        <div
          style={{
            margin: "0px 5px",
            borderRight: "2px solid white",
            height: "100%",
          }}
        ></div>
        <div style={{ width: "100%" }}>
          <Heading>Server State</Heading>

          <Text style={{ textAlign: "center" }}>Remotely</Text>
          <Text style={{ textAlign: "center" }}>Persisted</Text>
          <Text style={{ textAlign: "center" }}>Asynchronous</Text>
          <Text style={{ textAlign: "center" }}>Out-of-date</Text>
        </div>
      </FlexBox>

      <Notes>
        <ul>
          <li>Client State</li>
          <li>
            It's local and temporary (state defined in the app that is only
            active while the application is open)
          </li>
          <li>
            Synchronous (it is state we can access without any latency so we can
            pretty much rely that the data is always up-to-date)
          </li>
          <li>Examples:</li>
          <li>- Form input values</li>
          <li>- Active nav link</li>
          <li>- Selected page on a table</li>

          <li>On the other hand... Server state is</li>

          <li>
            Stored and persisted remotely (on the server. It can be read and
            manipulated by both the server and any other client that can
            interact with it so in the end, the application doesn't have full
            control of this data).
          </li>
          <li>
            Asynchronous data ( there is latency. After doing a request, the
            response of it can be outdated 1 second later)
          </li>
          <li>Not up-to-date most of the times</li>
          <li>Examples:</li>
          <li>- List of vehicles</li>
          <li>- Driver details</li>
        </ul>
      </Notes>
    </Slide>

    {/* SERVER STATE */}
    <Slide>
      <Heading>Server State</Heading>

      <FlexBox flexDirection="column" height="100%">
        <Text style={{ margin: "0px" }}>Caching</Text>
        <Text style={{ margin: "0px" }}>Deduping</Text>
        <Text style={{ margin: "0px" }}>When is the data out-of-date?</Text>
        <Text style={{ margin: "0px" }}>Updating out-of-date data</Text>
        <Text style={{ margin: "0px" }}>Pagination</Text>
        <Text style={{ margin: "0px" }}>...</Text>
      </FlexBox>
      <Notes>
        <ul>
          <li>
            Server State is Much More Complex to Handle and it has many more
            challenges.
          </li>
          <li>Caching data</li>
          <li>Avoid duplicate request</li>
          <li>
            Knowing when data is "out of date" and update that data as quickly
            as possible
          </li>
          <li>
            Performance optimizations like pagination and lazy loading data
          </li>
          <li>
            The list goes on and one and thats where React Query comes to the
            rescue!
          </li>
        </ul>
      </Notes>
    </Slide>

    {/* REACT QUERY */}
    <Slide backgroundImage="url('/react-query.svg')" backgroundOpacity={0.1}>
      <Heading>React Query</Heading>

      <FlexBox flexDirection="column" height="100%">
        <Text style={{ margin: "0px" }}>Display data as fast as possible</Text>
        <Text style={{ margin: "0px" }}>Keep data as fresh as possible</Text>

        <div style={{ width: "70%", textAlign: "center" }}>
          <Text
            fontSize={"100px"}
            style={{ margin: "0px", textAlign: "center" }}
          >
            ⏱️
          </Text>

          <FlexBox width="100%" height="30%">
            <Text
              fontWeight="bold"
              fontSize={"100px"}
              style={{ margin: "0px", flex: 1, textAlign: "center" }}
            >
              Cache
            </Text>

            <Text
              fontWeight="bold"
              fontSize={"100px"}
              style={{ margin: "0px", flex: 1, textAlign: "center" }}
            >
              Stale
            </Text>
          </FlexBox>
        </div>
      </FlexBox>
      <Notes>
        <ul>
          <li>
            React Query solves all these challenges really well out-of-the-box
            with zero configuration and it can be highly customizable according
            to our application needs.
          </li>
          <li>
            This library follows a caching strategy that tries showing the data
            as fast as possible which provides a great UX while at the same time
            keeping our data as fresh, as up-to-date as possible.
          </li>
          <li>
            And this is done with a combination of cache and stale times. Each
            request with react-query will have a cache and stale time linked to
            it.
          </li>
        </ul>
      </Notes>
    </Slide>

    {/* CACHE VS STALE */}
    <Slide backgroundImage="url('/time.jpg')" backgroundOpacity={0.3}>
      <FlexBox height="100%" alignItems="start">
        <div style={{ width: "100%" }}>
          <Heading>Cache Time</Heading>

          <Text style={{ textAlign: "center" }}>How long in cache</Text>
          <Text style={{ textAlign: "center" }}>5 minutes</Text>
          <Text style={{ textAlign: "center" }}>
            Used to display data instantly
          </Text>
        </div>
        <div
          style={{
            margin: "0px 5px",
            borderRight: "2px solid white",
            height: "100%",
          }}
        ></div>
        <div style={{ width: "100%" }}>
          <Heading>Stale Time</Heading>

          <Text style={{ textAlign: "center" }}>
            How long the data is fresh
          </Text>
          <Text style={{ textAlign: "center" }}>0 seconds!! 🤨</Text>
          <Text style={{ textAlign: "center" }}>
            Used to update outdated data
          </Text>
        </div>
      </FlexBox>

      <Notes>
        <ul>
          CACHE
          <li>
            Cache time represents the duration that the data of a request stays
            in cache
          </li>
          <li>
            By default, react-query saves data in cache for 5 minutes. This
            means that, during at least 5 minutes, if we request the same data
            it will be displayed instantly, no loading spinners will be
            displayed.
          </li>
          <li>
            Cache time resets after each request, that's why I said it stays in
            cache at least 5 minutes.
          </li>
          <li>
            If no request is done after 5 minutes in cache, the query and its
            data are deleted and garbage collected.
          </li>
          STALE
          <li>The duration that the data is considered fresh, up-to-date</li>
          <li>
            By default, react-query considers that the data is fresh for 0
            seconds. Which means that react-query considers that the data is
            always outdated. Like I said previously, the server data is
            persisted remotely and it can be changed and outdated at any time so
            it is fair to assume that the server data of our application is
            outdated.
          </li>
          <li>
            And this is a really important detail. Because we assume that the
            server data is outdated, a request for fresh data will always be
            made even if that data is in cache.
          </li>
          <li>
            This is a little confusing but basically, staleTime is used to
            update outdated data and control bandwidth as well
          </li>
        </ul>
      </Notes>
    </Slide>

    {/* QUERY LIFECYCLE*/}
    <Slide
      backgroundImage="url('/query_lifecycle.png')"
      backgroundSize="initital"
      backgroundPosition="50% 70%"
    >
      <Heading>Query Lifecycle</Heading>
      <Notes>
        <ul>
          <li>Let's say I open the app for the first time...</li>
        </ul>
      </Notes>
    </Slide>

    {/* DEMO */}
    <Slide>
      <FlexBox height="100%">
        <Heading>Let's see this in action! 😏</Heading>
      </FlexBox>
      <Notes>
        Let's see this in action!
        <ol>
          <li>
            Always fetching the fresh data can be a little aggressive for our
            app but here a major improvement can be done. Here we have the last
            7 days. I think it is safe to assume that the data before today will
            not change, and for those days we can use an infinite stale time,
            which means, the data is always fresh. With this approach. if I
            click on Monday 10 times for instance, only one request would be
            made. And only a new one would be made if it goes out of cache after
            5 minutes.
          </li>
          <li>
            Refetch on window focus: IN THE scope of our application, the
            refetch on window focus feature is a little aggressive and we will
            probably completely disable this
          </li>
          <li>
            Pagination Cartrack (CART00046, Vehicle CTT_68-TO-29, Yesterday,
            14:16) Mention infinite stale time on previous days!
          </li>

          <li>
            <a
              href="https://react-query.tanstack.com/examples/auto-refetching"
              target="_blank"
              rel="noreferrer"
            >
              Polling Example
            </a>
          </li>
        </ol>
      </Notes>
    </Slide>

    {/* LESSONS LEARNED */}
    <Slide>
      <Heading>Lessons Learned</Heading>
      <FlexBox flexDirection="column" height="100%">
        <Text style={{ margin: "0px" }}>
          Don't use global state for everything
        </Text>
        <Text style={{ margin: "0px" }}>
          Less loading spinners 👉 more data (Users: 🤩)
        </Text>
        <Text style={{ margin: "0px" }}>Potentially helps save bandwidth</Text>
        <Text style={{ margin: "0px" }}>More maintainable application</Text>
      </FlexBox>

      <Notes>
        <ul>
          <li>
            Think where the data belongs before adding it to global state. If
            the data comes from the server, it is server state and you should
            use react-query.
          </li>
          <li>
            With more data and less loading spinners, react-query can have a
            direct impact on our end-users (by making our application feel
            faster and more responsive)
          </li>
          <li>
            Can potentially helps save bandwidth with a correct staleTime usage.
            (Good for our infrastructure)
          </li>
          <li>
            From my experience with react-query on tachograph, I was able to
            remove many lines of code and replace with just a few lines of React
            Query logic. It really makes the application more maintainable and
            easy to build new features without worrying about handling loadings
            and error states.(Good for the developers)
          </li>
          <li>
            With this I am trying to say that React Query is a triple threat.
            Good for infrastructure, developers and users.
          </li>
        </ul>
      </Notes>
    </Slide>

    {/* Thanks */}
    <Slide>
      <FlexBox height="100%">
        <Heading>Thanks</Heading>
        <Notes>
          <ul>
            <li>That's the end of my talk, thanks everyone!</li>
          </ul>
        </Notes>
      </FlexBox>
    </Slide>
  </Deck>
);

function App() {
  return <Presentation></Presentation>;
}

function PaddedGrid({ style, center, children, ...rest }) {
  return (
    <Grid
      style={{
        padding: "0px 100px",
        textAlign: "left",
        ...(center
          ? {
              alignItems: "center",
              justifyContent: "center",
            }
          : {}),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Grid>
  );
}
export default App;
