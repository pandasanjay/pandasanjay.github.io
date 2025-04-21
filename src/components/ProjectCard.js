// import React from 'react';
// import { Card, CardBody, CardTitle, CardText, Badge, Button } from 'reactstrap';
// import { Link } from 'gatsby';
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// const ProjectCard = ({ project, slug }) => {
//   const image = getImage(project.imageFile);

//   return (
//     <Card className="h-100 shadow-sm">
//       <GatsbyImage
//         image={image}
//         alt={project.title}
//         className="card-img-top"
//         style={{ height: '200px' }}
//       />
//       <CardBody>
//         <Badge color="primary" className="mb-2">{project.category}</Badge>
//         <CardTitle tag="h4">{project.title}</CardTitle>
//         <CardText>{project.description}</CardText>
//         <div className="mb-3">
//           {project.tech.map((tech, index) => (
//             <Badge color="secondary" key={index} className="mr-2 mb-2">{tech}</Badge>
//           ))}
//         </div>
//         <div className="d-flex justify-content-between align-items-center">
//           <Link to={`/projects/${slug}`} className="btn btn-outline-primary">
//             View Details
//           </Link>
//           <div>
//             {project.github && (
//               <Button color="link" href={project.github} target="_blank" className="mr-2">
//                 <i className="fa fa-github"></i>
//               </Button>
//             )}
//             {project.demo && (
//               <Button color="link" href={project.demo} target="_blank">
//                 <i className="fa fa-external-link"></i>
//               </Button>
//             )}
//           </div>
//         </div>
//       </CardBody>
//     </Card>
//   );
// };

// export default ProjectCard;