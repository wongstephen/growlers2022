import React from "react";
import { EventsCardLoading } from "./EventsCardLoading";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export const Events = ({ posts }) => {
  // removes expired and hoist null expireated dates to tht top
  const filterExpired = (postData) => {
    const today = new Date();
    return postData.filter((post) => {
      return new Date(post.attributes.Expiration) >= today;
    });
  };
  const filtereDateless = (postData) => {
    return postData.filter((post) => {
      return post.attributes.Expiration == null;
    });
  };
  const processedEventData = () => {
    const filteredNullDate = filtereDateless(posts);
    const filteredEvents = filterExpired(posts);
    return [...filteredNullDate, ...filteredEvents];
  };

  return (
    <section
      id="events"
      className="max-w-5xl py-24 mx-auto bg-transparent md:pt-32"
    >
      <div className="container px-4 mx-auto">
        <div className="text-left">
          <span className="inline-block mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">
            Annoucements
          </span>
          <h3 className="mb-6 text-3xl font-bold leading-snug tracking-tight text-gray-900 md:text-5xl lg:text-7xl md:leading-snug lg:leading-snug">
            News and Events
          </h3>
        </div>{" "}
        <div className="flex flex-wrap w-full pt-12 -mx-4 justify-lef ">
          {posts ? (
            processedEventData().map((post, idx) => (
              <div
                className={
                  // If there is an odd number of post, the post will become full width.
                  `w-full md:w-1/2 px-4 mb-4 ${
                    processedEventData().length % 2 !== 0 && "md:first:w-full"
                  }`
                }
                key={idx}
              >
                <div className="h-full group">
                  <div className="relative h-full px-8 pt-16 pb-8 transition duration-200 bg-white rounded-sm shadow-sm hover:shadow-md">
                    <h3 className="mb-4 text-xl font-bold leading-7 text-gray-900 md:text-2xl">
                      {post.attributes.Title}
                    </h3>
                    <ReactMarkdown
                      className="mb-12 font-medium tracking-wider text-gray-600 transition duration-200 group-hover:text-gray-700"
                      rehypePlugins={[rehypeRaw]}
                      children={post.attributes.Body}
                      linkTarget={"_blank"}
                    />
                    {post?.attributes?.Media?.data?.attributes?.formats?.small
                      ?.url && (
                      <img
                        className="w-full h-auto max-w-xs mx-auto"
                        src={
                          process.env.REACT_APP_POSTMEDIA +
                          post.attributes.Media.data.attributes.formats.small
                            .url
                        }
                        alt={`${post.attributes.Title} alt`}
                      />
                    )}
                    {!post?.attributes?.Media?.data?.attributes?.formats?.small
                      ?.url &&
                      post?.attributes?.Media?.data?.attributes?.formats
                        ?.thumbnail?.url && (
                        <img
                          className="w-full h-auto max-w-xs mx-auto"
                          src={
                            process.env.REACT_APP_POSTMEDIA +
                            post.attributes.Media.data.attributes.formats
                              .thumbnail.url
                          }
                          alt="Event Loading"
                        />
                      )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              {Array(2)
                .fill("")
                .map((obj, idx) => (
                  <EventsCardLoading key={idx} />
                ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
