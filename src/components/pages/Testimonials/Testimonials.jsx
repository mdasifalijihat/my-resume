import { FaStar } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        role: "Project Manager",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        message: "Asif delivered the project on time with great quality. Highly recommended!"
    },
    {
        id: 2, 
        name: "Jane Smith",
        role: "CEO, Tech Solutions",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4,
        message: "Professional and skilled developer. Very easy to work with."
    },
    {
        id: 3,
        name: "Michael Lee",
        role: "Freelance Client",
        image: "https://randomuser.me/api/portraits/men/65.jpg",
        rating: 5,
        message: "Great communication and excellent coding skills."
    },
];

const Testimonials = () => {
    return (
        <div className=" bg-base-200 py-12 px-4 my-12">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-primary mb-10">What Clients Say</h2>

                <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
                    {testimonials.map(({ id, name, role, image, rating, message }) => (
                        <div key={id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
                            <img src={image} alt={name} className="w-24 h-24 rounded-full mb-4 object-cover" />
                            <h3 className="text-xl font-semibold">{name}</h3>
                            <p className="text-sm text-gray-500 mb-2">{role}</p>
                            <div className="flex space-x-1 mb-4">
                                {[...Array(rating)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic">"{message}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
