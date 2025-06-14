// import React from 'react';
// import { Card, CardBody, Button } from 'reactstrap';

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <Card className="border-danger">
//           <CardBody className="text-center">
//             <h4>Something went wrong</h4>
//             <p>The component failed to load. Please try refreshing the page.</p>
//             <Button color="primary" onClick={() => window.location.reload()}>
//               Refresh Page
//             </Button>
//           </CardBody>
//         </Card>
//       );
//     }

//     return this.props.children;
//   }
// }

// export default ErrorBoundary;