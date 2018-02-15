import React from 'react';
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper';
import Button from 'material-ui/Button';

import articles from './articles'
import Article from './Article'


function getSteps() {
    return articles.map((el) => { return el.date})
  }


  function getStepContent(step) {
    return ( <Article article={articles[step]} />)
  }

  class TimeLine extends React.Component {
    state = {
      activeStep: 0,
    };
    handleNext = () => {
        this.setState({
          activeStep: this.state.activeStep + 1,
        });
      };
    
      handleBack = () => {
        this.setState({
          activeStep: this.state.activeStep - 1,
        });
      };

     




   


render() {
    const steps = getSteps();
    const { activeStep } = this.state;
    return (
    <div><Stepper activeStep={activeStep} orientation="vertical">
    {steps.map((label, index) => {
      return (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
          <StepContent>
            {getStepContent(index)}
            <div>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
             
                >
                  Back
                </Button>
                <Button
                  variant="raised"
                  color="primary"
                  onClick={this.handleNext}
                 
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          </StepContent>
        </Step>
      );
    })}
  </Stepper></div>
    )
}

}


export default TimeLine