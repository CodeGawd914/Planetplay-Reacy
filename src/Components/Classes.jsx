import React, { Component } from 'react';
import {Grid, Card, Image} from 'semantic-ui-react'
import class1 from '../images/class1.jpeg'
import messy from '../images/MessyPlay.jpeg'
import preschool from '../images/Preschool.jpeg'
import story from '../images/Storytime.jpeg'
import cosmickids from '../images/CosmicKids.jpeg'
import special from '../images/Special.jpeg'

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
            <Card.Header>Story Time &amp; Connection</Card.Header>
            <Card.Meta>
              <span className='date'>2-4 years old</span>
            </Card.Meta>
            <Image src={story}/>
          <Card.Description>
          <p>Storytime and Connection is the perfect way to build and encourage a love for reading. Children
will be exposed to a variety of children’s books each semester. They will learn to listen to read
alouds, answer age appropriate questions, form predictions, explore illustrations, and make
connections. Stories will then come to life with connected and engaging activities and crafts.
Children are never too young to build comprehension skills, and this class will do just that, while
also fostering an undeniable love for reading.</p>
          </Card.Description>
          </Card.Content>
        </Card>
        </Grid.Column>

        <Grid.Column>
        <Card>
          <Card.Content>
            <Card.Header>Messy Play</Card.Header>
            <Card.Meta>
              <span className='date'>All Ages</span>
            </Card.Meta>
            <Image src={messy}/>
          <Card.Description>
          <p>Messy Play is a dress for mess type of class! Children will explore a selection of tactile and
messy play materials. We will engage their senses, encourage creativity, and have a blast all
while getting messy. There is shaving cream, paint, play doh, glitter, stickers, and more! The
best part, the staff at Planet Play will do all the cleaning afterwards!</p>
          </Card.Description>
          </Card.Content>
        </Card>
        </Grid.Column>

        <Grid.Column>
        <Card>
          <Card.Content>
            <Card.Header>Blast Into Learning</Card.Header>
            <Card.Meta>
              <span className='date'>Pre-K Readiness Program</span>
            </Card.Meta>
            <Image src={class1}/>
          <Card.Description>
            <p>Blast into Learning is a preschool readiness program that will help your three year old learn
foundational skills, in an engaging and age appropriate manner. This is a toddler class unlike
any other on Long Island. Our curriculum has been designed specifically for Planet Play by
Michelle Vasilescu, a NYS certified teacher and curriculum designer. With ten years of early
childhood experience, Michelle has prepared  school based learning and activities that will be
taught through hands-on thematic units. Each semester will cover two different units, allowing
you to complete a full year of learning without ever repeating a course!</p>
          </Card.Description>
          </Card.Content>
        </Card>
        </Grid.Column>

        <Grid.Column>
        <Card>
          <Card.Content>
            <Card.Header>Blast Into Learning</Card.Header>
            <Card.Meta>
              <span className='date'>Kindergarten Readiness Program</span>
            </Card.Meta>
            <Image src={preschool}/>
          <Card.Description>
          <p>Blast into Learning is a kindergarten readiness program that will help your four year old learn
foundational skills, in an engaging and age appropriate manner. This is a preschool class unlike
any other on Long Island. Our curriculum has been designed specifically for Planet Play by
Michelle Vasilescu, a NYS certified teacher and curriculum designer. With ten years of early
childhood experience, Michelle has prepared  school based learning and activities that will be
taught through hands-on thematic units. Each semester will cover two different units, allowing
you to complete a full year of learning without ever repeating a course!</p>
          </Card.Description>
          </Card.Content>
        </Card>
        </Grid.Column>

        <Grid.Column>
        <Card>
          <Card.Content>
            <Card.Header>Cosmic Kids</Card.Header>
            <Card.Meta>
              <span className='date'>6 months -18 months</span>
            </Card.Meta>
            <Image src={cosmickids}/>
          <Card.Description>
          <p>Cosmic Kids is a program designed for our youngest space cadets. Through music, stories,
movement, games and more, your little one will learn to build confidence,  develop social skills,
and learn about things such as color, rhythm and more.</p>
          </Card.Description>
          </Card.Content>
        </Card>
        </Grid.Column>

        <Grid.Column>
        <Card>
          <Card.Content>
            <Card.Header>Special Needs</Card.Header>
            <Card.Meta>
              <span className='date'>All Ages</span>
            </Card.Meta>
            <Image src={special}/>
          <Card.Description>
          Special Needs Art and Play is a safe space for children of all abilities to participate in craft
activities and play with other children. Sensory play, fine motor work, art activities, and free play
are just some of the things this course includes. Our program is unique, as it has been designed
by both a NYS Special Education teacher and a mother of a child with special needs. Michelle
and Jacqueline have worked together to create a program that will engage your child and
promote socialization, all while taking into consideration their individual learning styles and
needs.
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
