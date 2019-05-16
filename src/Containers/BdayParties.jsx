import React from 'react'
import {Table} from 'semantic-ui-react'

 const BdayParties = () => {

   return (
     <React.Fragment>
     <div id='para'>
     <p className='w3-text-white gilroy'>Our slogan isn’t “An Out of this World Adventure” for no reason. Here at Planet Play, we are committed to providing children and families with the most memorable birthday party of their lives. All you have to do is pick the date, and leave the rest up to us! Our trained party professionals will take care of everything, including the behind the scenes necessities, day of duties, and after party clean up. More importantly, we will work hard to ensure that all children have a spectacular time, and that the birthday child feels like the star! All of our birthday parties are private and cater specifically to your guest list. And with our extensive choice of add-ons, you can truly customize the day as you please. Ready to book your party? Call us today so we can save your date!
     </p>
     </div>
     <Table celled id="Packages">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Regular</Table.HeaderCell>
          <Table.HeaderCell>Special</Table.HeaderCell>
          <Table.HeaderCell>Ultra</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>CosmicCafe Specials</Table.Cell>
          <Table.Cell>CosmicCafe Specials</Table.Cell>
          <Table.Cell>CosmicCafe Specials</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>1hr Play in Attractions</Table.Cell>
          <Table.Cell>2hr Play in Attractions</Table.Cell>
          <Table.Cell>3hr Play in Attractions</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>150 Galaxy Trading Ticketsl</Table.Cell>
          <Table.Cell>250 Galaxy Trading Tickets</Table.Cell>
          <Table.Cell>350 Galaxy Trading Tickets</Table.Cell>
        </Table.Row>
      </Table.Body>
      </Table>

    </React.Fragment>
   )
 }

 export default BdayParties
