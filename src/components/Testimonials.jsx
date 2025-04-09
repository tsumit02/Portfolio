import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'John Doe',
            feedback: 'This service is amazing! Highly recommended.',
            role: 'Software Engineer',
        },
        {
            name: 'Jane Smith',
            feedback: 'The individual was professional and delivered on time.',
            role: 'Project Manager',
        },
        {
            name: 'Alice Johnson',
            feedback: 'Great experience working with this Individual!',
            role: 'UI/UX Designer',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <motion.section
            id="testimonials"
            className="testimonials"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <motion.h2 variants={cardVariants}>Testimonials</motion.h2>
            <div className="testimonials-container">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        className="testimonial-card"
                        variants={cardVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                        <h4 className="testimonial-name">{testimonial.name}</h4>
                        <p className="testimonial-role">{testimonial.role}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Testimonials;