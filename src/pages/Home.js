import PageContent from '../components/UI/PageContent';

function HomePage() {
  return (
    <PageContent title="Welcome to Gourmet Haven">
      <section>
        <h2>About Us</h2>
        <p>
          Nestled in the heart of the city, Gourmet Haven is a haven for food
          enthusiasts seeking exquisite flavors and impeccable service.
        </p>
      </section>

      <section>
        <h2>Cuisine</h2>
        <p>
          At Gourmet Haven, we pride ourselves on offering a diverse menu that
          caters to a wide range of tastes and preferences. Our culinary team is
          dedicated to creating a symphony of flavors, drawing inspiration from
          international cuisines while highlighting the freshest, locally
          sourced ingredients.
        </p>
      </section>

      <section>
        <h2>Ambiance</h2>
        <p>
          Step into a world of sophistication and warmth as you enter our
          restaurant. Our interior design combines modern elegance with cozy
          elements, creating an inviting atmosphere for both intimate dinners
          and celebratory gatherings. Soft lighting, comfortable seating, and
          tasteful décor set the stage for an unforgettable dining experience.
        </p>
      </section>

      <section>
        <h2>Menu Highlights</h2>
        <ul>
          <li>
            ● Signature Dishes
            <ul>
              <li>&emsp;○ Truffle Infused Filet Mignon</li>
              <li>&emsp;○ Pan-Seared Sea Bass with Lemon Beurre Blanc</li>
            </ul>
          </li>
          <li>
            ● Vegetarian Delights
            <ul>
              <li>&emsp;○ Wild Mushroom Risotto</li>
              <li>&emsp;○ Stuffed Bell Peppers with Quinoa and Feta</li>
            </ul>
          </li>
          <li>● Sushi Bar</li>
          <li>● Craft Cocktails</li>
        </ul>
      </section>

      <section>
        <h2>Service</h2>
        <p>
          At Gourmet Haven, exceptional service is our hallmark. Our attentive
          and knowledgeable staff is here to ensure your dining experience is
          flawless, from the moment you walk through our doors to the final sip
          of dessert wine.
        </p>
      </section>

      <section>
        <h2>Private Dining</h2>
        <p>
          For special occasions and private events, we offer elegant private
          dining rooms with customizable menus to suit your needs.
        </p>
      </section>

      <section>
        <h2>Reservations</h2>
        <p>
          To guarantee a table at Gourmet Haven, we recommend making
          reservations in advance. Whether it's a romantic dinner for two, a
          family celebration, or a business meeting, we look forward to hosting
          you and making your visit truly memorable.
        </p>
      </section>
    </PageContent>
  );
}

export default HomePage;
