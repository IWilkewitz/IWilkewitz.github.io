import React, { Component } from 'react';

class Photos extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title}>
                <img alt={projects.title} src={projectImage} />
              </a>
            </div>
          </div>
        )
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

          <h1>Some of my hobby photography/databending!</h1>
          <h1>Databending is the "manipulating a media file of a certain format, using software designed to edit files of another format. Distortions in the medium typically occur as a result,"</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>

            <h1>I use audio software like Audacity to apply musical effects like reverb and distortion to image files, giving me these effects.</h1>
            <h1>(Click image to see full size)</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default Photos;
