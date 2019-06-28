import React, { Component } from 'react';
import {Grid, Card, Image} from 'semantic-ui-react'
import class1 from '../images/class1.jpeg'


class Classes extends Component {

  render() {
    return (
      <React.Fragment>
      <div>
      <p className='w3-text-white neon3h KGN'>Planet Play is proud to say that all of their toddler and preschool classes have been carefully designed and created by Michelle Vasilescu, a New York State certified teacher. With over ten years of early childhood general and special education teaching experience, Michelle has the knowledge and passion necessary to create classes that foster growth and development in babies, toddlers and preschoolers. Our classes help to ignite the senses and creativity of our children, while being hands-on and  promoting academic and social growth. They also provide parents with an opportunity to learn and play with their young ones. Still not convinced that Planet Play is right for your child? We offer drop-in classes, so you can attend and experience Planet Play’s take on learning before commiting to a course.
      </p>
      <Grid columns={3} divided>
        <Grid.Column>
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Image src={class1}/>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
          </Card.Content>
        </Card>
        </Grid.Column>

        <Grid.Column>
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Image src={class1}/>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
          </Card.Content>
        </Card>
        </Grid.Column>

        <Grid.Column>
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Image src={class1}/>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
          </Card.Content>
        </Card>
        </Grid.Column>

        <Grid.Column>
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Image src={class1}/>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
          </Card.Content>
        </Card>
        </Grid.Column>

        <Grid.Column>
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Image src={class1}/>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
          </Card.Content>
        </Card>
        </Grid.Column>

        <Grid.Column>
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Image src={class1}/>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
          </Card.Content>
        </Card>
        </Grid.Column>

        <Grid.Column>
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Image src={class1}/>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
          </Card.Content>
        </Card>
        </Grid.Column>


      </Grid>


      </div>
      </React.Fragment>
    );
  }

}

export default Classes;
