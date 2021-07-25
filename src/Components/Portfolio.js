import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap" title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              {projects.url.web !== "" && (
                <div className="link-icon">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={projects.url.web}
                  >
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              )}
              {projects.url.android !== "" && (
                <div className="link-icon">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={projects.url.android}
                  >
                    <i className="fa fa-android"></i>
                  </a>
                  {projects.url.ios !== "" && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={projects.url.ios}
                    >
                      <i className="fa fa-apple"></i>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
