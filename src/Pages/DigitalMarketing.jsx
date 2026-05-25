import React from "react";
import { NavLink } from "react-router-dom";
import "./DigitalMarketing.css";

const DigitalMarketing = () => {
  return (
    <div className="dm-container">
      <header className="dm-header">
        <p className="eyebrow">Digital Marketing Packages</p>
        <h1>
          Simple, affordable pricing —<br />
          no surprises
        </h1>
        <p>
          Flexible plans designed for growing businesses. No hidden charges.
        </p>
      </header>

      <div className="dm-cards-grid">
        {/* Starter */}
        <div className="dm-card">
          <span className="dm-badge dm-badge-blue">Starter</span>
          <div className="dm-card-icon">🚀</div>
          <div className="dm-card-title">Social media starter</div>
          <div className="dm-price-block">
            <div className="dm-price-main">
              ₹2,999 <span className="period">/mo</span>
            </div>
            <div className="dm-price-note">No contract · cancel anytime</div>
          </div>
          <div className="dm-divider"></div>
          <div className="dm-features">
            <div className="dm-feature">
              <span className="check">✓</span> 2 posts per week
            </div>
            <div className="dm-feature">
              <span className="check">✓</span> Informational + occasion posts
            </div>
            <div className="dm-feature">
              <span className="check">✓</span> Basic content calendar
            </div>
            <div className="dm-feature">
              <span className="check">✓</span> Caption + hashtag writing
            </div>
          </div>
        </div>

        {/* Social Media Pro */}
        <div className="dm-card">
          <span className="dm-badge dm-badge-green">Popular</span>
          <div className="dm-card-icon">📱</div>
          <div className="dm-card-title">Social media pro</div>
          <div className="dm-price-block">
            <div className="dm-price-main">
              ₹5,999 <span className="period">/mo</span>
            </div>
            <div className="dm-price-note">1 month · rolling</div>
          </div>
          <div className="dm-divider"></div>
          <div className="dm-features">
            <div className="dm-feature">
              <span className="check">✓</span> 3 posts per week
            </div>
            <div className="dm-feature">
              <span className="check">✓</span> Info + news + occasion content
            </div>
            <div className="dm-feature">
              <span className="check">✓</span> 1 graphic video per week
            </div>
            <div className="dm-feature">
              <span className="check">✓</span> Reel scripting + editing
            </div>
            <div className="dm-feature">
              <span className="check">✓</span> Monthly content calendar
            </div>
            <div className="dm-feature muted">
              <span className="info-icon">ℹ</span> Client provides raw footage
            </div>
          </div>
        </div>

        {/* Ads Management */}
        <div className="dm-card">
          <span className="dm-badge dm-badge-amber">Ads</span>
          <div className="dm-card-icon">📣</div>
          <div className="dm-card-title">Ads management</div>
          <div className="dm-price-block">
            <div className="dm-price-main">
              ₹5,999 <span className="period">/mo</span>
            </div>
            <div className="dm-price-note">Meta + Google both included</div>
          </div>
          <div className="dm-divider"></div>
          <div className="dm-features">
            <div className="dm-feature">
              <span className="check">✓</span> Ad copy + creatives included
            </div>
            <div className="dm-feature">
              <span className="check">✓</span> Campaign setup + optimisation
            </div>
            <div className="dm-feature">
              <span className="check">✓</span> Monthly performance report
            </div>
            <div className="dm-ads-slab">
              <div className="dm-ads-slab-row">
                <span>Budget upto ₹30,000</span>
                <strong>₹5,000</strong>
              </div>
              <div className="dm-ads-slab-row">
                <span>Budget upto ₹60,000</span>
                <strong>₹8,000</strong>
              </div>
              <div className="dm-ads-slab-row">
                <span>Budget above ₹60,000</span>
                <strong>Custom</strong>
              </div>
            </div>
          </div>
        </div>

        {/* SEO */}
        <div className="dm-card">
          <span className="dm-badge dm-badge-coral">SEO</span>
          <div className="dm-card-icon">📈</div>
          <div className="dm-card-title">SEO growth</div>
          <div className="dm-price-block">
            <div className="dm-price-main">
              ₹5,999 <span className="period">/mo</span>
            </div>
            <div className="dm-price-note">1 month · rolling</div>
          </div>
          <div className="dm-divider"></div>
          <div className="dm-features">
            <div className="dm-feature">
              <span className="check">✓</span> On-page + technical SEO
            </div>
            <div className="dm-feature">
              <span className="check">✓</span> Google My Business SEO
            </div>
            <div className="dm-feature">
              <span className="check">✓</span> Keyword targeting + ranking
            </div>
            <div className="dm-feature">
              <span className="check">✓</span> Monthly ranking report
            </div>
            <div className="dm-feature muted">
              <span className="info-icon">ℹ</span> Results visible in 3–6 months
            </div>
          </div>
        </div>

        {/* Website */}
        <div className="dm-card">
          <span className="dm-badge dm-badge-purple">One-time</span>
          <div className="dm-card-icon">🌐</div>
          <div className="dm-card-title">Portfolio website</div>
          <div className="dm-price-block">
            <div className="dm-price-main">₹3,999</div>
            <div className="dm-price-note">One-time · WordPress or custom</div>
          </div>
          <div className="dm-divider"></div>
          <div className="dm-features">
            <div className="dm-feature">
              <span className="check">✓</span> Home, About, Services, Contact
            </div>
            <div className="dm-feature">
              <span className="check">✓</span> Form → Email + WhatsApp redirect
            </div>
            <div className="dm-feature">
              <span className="check">✓</span> Instagram link + Google Maps
            </div>
            <div className="dm-feature">
              <span className="check">✓</span> Mobile responsive design
            </div>
            <div className="dm-feature muted">
              <span className="info-icon">ℹ</span> Domain + hosting excluded
            </div>
          </div>
        </div>
      </div>

      {/* Jumbo Plan */}
      <div className="dm-jumbo-wrap">
        <div className="dm-jumbo-card">
          <div className="dm-jumbo-hot-badge">
            🚀 Best value — Jumbo growth plan
          </div>
          <div className="dm-jumbo-inner">
            <div className="jumbo-left">
              <div className="dm-jumbo-title">Everything, together</div>
              <div className="dm-jumbo-sub">
                Ads + Social media + SEO — all in one plan
              </div>
              <div className="dm-jumbo-strike">Individual value ₹15,997/mo</div>
              <div className="dm-jumbo-price">
                ₹13,999 <span className="period">/mo</span>
              </div>
              <div className="dm-saving-pill">
                ✦ You save ₹1,998 every month
              </div>
              <div className="dm-free-box">
                <div className="gift-icon">🎁</div>
                <div>
                  <div className="dm-free-box-title">
                    Portfolio website — FREE
                  </div>
                  <div className="dm-free-box-sub">
                    Worth ₹3,999 · included at no extra cost
                  </div>
                </div>
              </div>
              <div className="dm-lock-note">
                🗓 3-month growth plan · minimum commitment for best results
              </div>
            </div>

            <div className="jumbo-right">
              <div className="dm-jumbo-features">
                <div className="dm-jumbo-feature">
                  <span className="check">✓</span> Meta + Google ads management
                </div>
                <div className="dm-jumbo-feature">
                  <span className="check">✓</span> 3 social posts per week
                </div>
                <div className="dm-jumbo-feature">
                  <span className="check">✓</span> 1 graphic video per week
                </div>
                <div className="dm-jumbo-feature">
                  <span className="check">✓</span> Reel scripting + editing
                </div>
                <div className="dm-jumbo-feature">
                  <span className="check">✓</span> Website SEO + GMB SEO
                </div>
                <div className="dm-jumbo-feature">
                  <span className="check">✓</span> Keyword targeting + ranking
                </div>
                <div className="dm-jumbo-feature">
                  <span className="check">✓</span> Monthly reports across all
                  services
                </div>
                <div className="dm-jumbo-feature">
                  <span className="check">✓</span> Portfolio website (free,
                  worth ₹3,999)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dm-footer-note">
        All prices are exclusive of GST. Ad budget is paid directly to the
        platform (Meta / Google) — not included in management fee.
        <br />
        Have questions? <NavLink to="/contact">Get in touch →</NavLink>
      </div>
    </div>
  );
};

export default DigitalMarketing;
