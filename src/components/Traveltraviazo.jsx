import React from "react";

const TravelTraviazo = () => {
  return (
    <div className="py-16 px-6 max-w-5xl mx-auto text-center">
      {/* Main Heading */}
      <h2 className="text-2xl text-[#60ba30] font-bold mb-2">Traviazo</h2>
      <div className="w-20 h-1 bg-[#60ba30] mx-auto mb-4" />
      <h3 className="text-4xl text-[#263300] font-bold mb-12">
        Travel Tips Traviazo
      </h3>

      {/* Section 1 */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-black mb-2">Tickets</h3>
        <p className="text-gray-700 text-base leading-relaxed">
          Check the ticket for Flight(s) details & accuracy as soon as you
          receive it. Keep your tickets with your passport and visas and do not
          forget these on the day you travel.
        </p>
      </div>

      {/* Section 2 */}
      <div className="mb-10">
        <h3 className="text-3xl font-semibold text-black mb-2">
          Passport & Visas
        </h3>
        <p className="text-gray-700 text-base leading-relaxed">
          Check the validity of your Passport and Visas. Check the passport and
          visa requirements for the countries you are visiting / transiting in
          on your planned journey – make sure you apply for them well before
          your date of travel. If you lose your passport or visa please contact
          the relevant embassy or consulate immediately.
        </p>
      </div>

      {/* Section 3 */}
      <div className="mb-10">
        <h3 className="text-3xl font-semibold text-black mb-2">Baggage</h3>
        <p className="text-gray-700 text-base leading-relaxed">
          Check with the airline you are traveling with on the stipulated
          baggage allowances. Ensure that your hand baggage allowance does not
          exceed the level enforced by the airline you are traveling with. This
          ensures unnecessary embarrassment at the check-in desk, having to move
          luggage from your hand baggage to your suitcase.
        </p>
      </div>

      {/* Section 4 */}
      <div className="mb-10">
        <h3 className="text-3xl font-semibold text-black mb-2">Packing</h3>

        <p className="text-gray-700 text-base leading-relaxed">
          Pack the night before you travel, to save rushing and being late for
          your flight. Check the weather forecast of your destination before
          travel to avoid taking unnecessary luggage. Roll clothes instead of
          folding them, it creates less creases. Honest! Pack travel sizes of
          all required lotions and potions with you to save the space.
        </p>
      </div>
      {/* Section 5 */}
      <div className="mb-10">
        <h3 className="text-3xl font-semibold text-black mb-2">Security</h3>
        <p className="text-gray-700 text-base leading-relaxed">
          If possible, put a luggage strap around your case for easy
          identification and extra security. Never carry packages on behalf of
          anyone else, however genuine they seem to be. Never leave luggage
          unattended at airports, this creates a high security risk.
        </p>
      </div>
      {/* Section 6 */}
      <div className="mb-10">
        <h3 className="text-3xl font-semibold text-black mb-2">Money</h3>
        <p className="text-gray-700 text-base leading-relaxed">
          Make sure you have enough foreign currency for your immediate arrival
          into a foreign country, particularly if your flight arrives at an odd
          hour. Always make a list of the Credit / Debit Card numbers and
          travelers’ cheques you are carrying along with the suppliers contact
          numbers in case they get lost.
        </p>
      </div>
      {/* Section 7 */}
      <div className="mb-10">
        <h3 className="text-3xl font-semibold text-black mb-2">Jetlag</h3>
        <p className="text-gray-700 text-base leading-relaxed">
          Try to drink plenty of water while on the aircraft as this help to
          counter dehydration. Check in flight magazines, for gentle exercises
          to do while on board to stop stiffness and tiredness of joints.
          Cleanse and moisturize skin regularly while on board again to counter
          dehydration. Eat a light meal onboard as easier to digest, avoid
          excessive carbohydrates and fats.
        </p>
      </div>
    </div>
  );
};

export default TravelTraviazo;
