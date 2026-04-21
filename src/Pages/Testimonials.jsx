import React, { useMemo, useState } from "react";
import googleReviews from "../Data/googleReviews.json";
// import './Testimonials.css'

const Testimonials = () => {
  const reviews = Array.isArray(googleReviews) ? googleReviews : [];

  const { topReviews, bottomReviews } = useMemo(() => {
    const top = [];
    const bottom = [];
    reviews.forEach((r, idx) => {
      if (idx % 2 === 0) top.push(r);
      else bottom.push(r);
    });
    return { topReviews: top, bottomReviews: bottom };
  }, [reviews]);

  const getInitials = (name = "") =>
    name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((p) => p[0]?.toUpperCase())
      .filter(Boolean)
      .join("");

  const isLikelyImageUrl = (url = "") =>
    /^https?:\/\/.+\.(png|jpe?g|webp|gif|avif)(\?.*)?$/i.test(url);

  const ReviewAvatar = ({ name, url }) => {
    const [errored, setErrored] = useState(false);
    const showImg = Boolean(url) && isLikelyImageUrl(url) && !errored;

    if (!showImg) {
      return (
        <div
          className="home_testimonials_author-image"
          aria-label={name ? `${name} avatar` : "Reviewer avatar"}
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 600,
          }}
        >
          {getInitials(name) || "?"}
        </div>
      );
    }

    return (
      <img
        src={url}
        loading="lazy"
        alt={name ? `${name} profile` : "Reviewer profile"}
        className="home_testimonials_author-image"
        onError={() => setErrored(true)}
      />
    );
  };

  const LargeReviewCard = ({ review }) => (
    <div
      reveal-item=""
      className="home_testimonials_item is-large"
    >
      <div className="text-size-large">"{review?.review_text ?? ""}"</div>
      <div className="spacer-large"></div>
      <div className="home_testimonials_author-wrapper">
        <ReviewAvatar name={review?.name} url={review?.profile_url} />
        <div>
          <div className="text-size-medium text-weight-semibold text-color-primary">
            {review?.name ?? ""}
          </div>
          {review?.time ? (
            <div className="text-color-tertiary">{review.time}</div>
          ) : null}
        </div>
      </div>
      <div className="home_testimonials_gradient-2"></div>
      <div className="home_testimonials_gradient-1"></div>
      <div className="home_testimonials_border"></div>
    </div>
  );

  const SmallReviewCard = ({ review }) => (
    <div reveal-item="" className="home_testimonials_item">
      <div>
        <div className="spacer-xxtiny"></div>
        <div className="text-size-medium">{review?.review_text ?? ""}</div>
      </div>
      <div className="spacer-xlarge"></div>
      <div className="testimonials_comany_text_wrap">
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <ReviewAvatar name={review?.name} url={review?.profile_url} />
          <div>
        <div className="text-color-primary text-weight-medium">
          {review?.name ?? ""}
        </div>
        {review?.time ? (
          <div className="text-color-tertiary">{review.time}</div>
        ) : null}
          </div>
        </div>
      </div>
      <div className="home_testimonials_gradient-2"></div>
      <div className="home_testimonials_gradient-1"></div>
      <div className="home_testimonials_border"></div>
    </div>
  );

  return (
     <section className="section_home_testimonials">
            <div className="padding-global">
              <div className="container-large">
                <div className="padding-section-medium">
                  <div className="testimonials_top-wrapper">
                    <div slide-in="" className="tag">
                      Testimonials
                    </div>
                    <div className="spacer-small"></div>
                    <h2 slide-in="" className="heading-style-h2">
                      <span className="text-gradient-grey">
                        Don&#x27;t just take our word for it; our customers{" "}
                      </span>
                      <span className="text-gradient-blue">say it best</span>
                    </h2>
                  </div>
                  <div className="spacer-large"></div>
                  <div
                    reveal-list=""
                    className="home_testimonials_list-wrapper no-scrollbar"
                  >
                    <div className="code-embed w-embed"></div>
                    <div className="home_testimonials_list is-top">
                      {topReviews.map((review, idx) =>
                        idx % 3 === 2 ? (
                          <SmallReviewCard
                            key={`${review?.name ?? "review"}-${idx}`}
                            review={review}
                          />
                        ) : (
                          <LargeReviewCard
                            key={`${review?.name ?? "review"}-${idx}`}
                            review={review}
                          />
                        )
                      )}
                    </div>
                    <div className="home_testimonials_list is-bottom">
                      {bottomReviews.map((review, idx) =>
                        idx % 3 === 0 ? (
                          <SmallReviewCard
                            key={`${review?.name ?? "review"}-${idx}`}
                            review={review}
                          />
                        ) : (
                          <LargeReviewCard
                            key={`${review?.name ?? "review"}-${idx}`}
                            review={review}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default Testimonials