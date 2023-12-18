import { FaHeart, FaBirthdayCake, FaLeaf } from 'react-icons/fa';

export default function WebGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-brown-500 text-white">
      <div>
        <h2 className="font-bold">Why the name Pacchis-Barah?</h2>
      </div>
      <div className="flex items-center">
        <FaHeart className="mr-2" />
        <p>Because the cause of a sustainable brand was so close to founders heart, her heart is where the name stems from too.</p>
      </div>
      <div>
        <p>25 and 12 are the birthdates of her mom and dad, and her grandmother.</p>
      </div>
      <div className="flex items-center">
        <FaBirthdayCake className="mr-2" />
        <p>Significant birth dates to the brand&apos;s name origin.</p>
      </div>
      <div>
        <p>Staying true to the brand&apos;s Indian roots, the digits are pronounced in Hindi.</p>
      </div>
      <div className="flex items-center">
        <FaLeaf className="mr-2" />
        <p>Symbolizes staying true to Indian roots.</p>
      </div>
    </div>
  );
}