"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertCircle, CheckCircle2, QrCode } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { doc, setDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/app/firebase';
import { toast } from 'react-toastify';
import EventSelectionModal from '../components/EventSelectionModal';
import { Button } from '@/components/ui/button';

// Constants for form options
const COURSES = [
    'B.Tech - Computer Science',
    'B.Tech - Information Technology',
    'B.Tech - Electronics',
    'B.Tech - Electrical',
    'B.Tech - Aerospace',
    'B.Tech - Mechanical',
    'B.Tech - Civil',
    'B.Tech - Biotechnology',
    'Other'
];

const YEARS = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Other'];

const VALIDATION_RULES = {
    name: { required: true, message: 'Name is required' },
    email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email address'
    },
    phone: {
        required: true,
        pattern: /^\d{10}$/,
        message: 'Please enter a valid 10-digit phone number'
    },
    college: { required: true, message: 'College name is required' },
    course: { required: true, message: 'Course is required' },
    year: { required: true, message: 'Year is required' },
};

const INITIAL_FORM_STATE = {
    name: '',
    email: '',
    phone: '',
    college: '',
    course: '',
    year: '',
};

const RegistrationPage = () => {
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const validateField = (name, value) => {
        const rules = VALIDATION_RULES[name];
        if (!rules) return '';

        const trimmedValue = typeof value === 'string' ? value.trim() : value;

        if (rules.required && !trimmedValue) {
            return rules.message;
        }

        if (trimmedValue && rules.pattern && !rules.pattern.test(trimmedValue)) {
            return rules.message;
        }

        return '';
    };

    const validateForm = () => {
        const newErrors = {};

        Object.keys(VALIDATION_RULES).forEach(field => {
            const error = validateField(field, formData[field]);
            if (error) newErrors[field] = error;
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        if (!validateForm()) {
            toast.error('Please fill in all required fields correctly');
            return;
        }

        setIsSubmitting(true);
        const toastId = toast.loading('Submitting registration...');

        try {
            const registrationData = {
                ...formData,
                status: 'pending',
                submittedAt: serverTimestamp(),
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            };

            const registrationRef = doc(collection(db, "registrations"));

            try {
                await setDoc(registrationRef, {
                    ...registrationData,
                    registrationId: registrationRef.id
                });

                try {
                    await fetch('/api/send-registration-confirmation', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(registrationData),
                    });
                } catch (emailError) {
                    console.error('Email confirmation error:', emailError);
                }

                toast.success('Registration completed successfully!');
                setFormData(INITIAL_FORM_STATE);
                setSelectedEvents([]);
                setTotalPrice(0);
                setSubmitStatus('success');
            } catch (error) {
                throw error;
            }
        } catch (error) {
            console.error('Registration error:', error);
            toast.error('Registration failed. Please try again.');
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            toast.dismiss(toastId);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-44 overflow-hidden">
            <motion.div
                className="relative w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <Card className="bg-gray-900/90 backdrop-blur-sm border-2 border-orange-900/50 shadow-xl relative z-10">
                    <CardHeader className="space-y-1 p-6 sm:p-8">
                        <div className="flex items-center justify-center mb-4">
                            <motion.div
                                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-cyan-500 rounded-lg"
                                animate={{
                                    rotate: [0, 180],
                                    borderRadius: ["20%", "50%", "20%"],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            />
                        </div>
                        <CardTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-orange-400 via-orange-300 to-cyan-400 text-transparent bg-clip-text">
                            Register for Goonj 2025
                            <motion.div
                                className="mt-2 h-1 mx-auto w-24 sm:w-32 bg-gradient-to-r from-orange-500 via-cyan-500 to-orange-500"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.5 }}
                            />
                        </CardTitle>
                        <CardDescription className="text-gray-400 text-center text-sm sm:text-base lg:text-lg">
                            Join us in celebrating technology & culture
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Personal Details Section */}
                            <div className="space-y-4">
                                {/* Name and Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Enter your full name"
                                            className="bg-gray-800/80 border-orange-900/50 text-gray-300"
                                        />
                                        {errors.name && (
                                            <p className="text-sm text-red-400 flex items-center gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-gray-300">Email</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Enter your email"
                                            className="bg-gray-800/80 border-orange-900/50 text-gray-300"
                                        />
                                        {errors.email && (
                                            <p className="text-sm text-red-400 flex items-center gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Phone and College */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Enter your phone number"
                                            className="bg-gray-800/80 border-orange-900/50 text-gray-300"
                                        />
                                        {errors.phone && (
                                            <p className="text-sm text-red-400 flex items-center gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.phone}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="college" className="text-gray-300">College Name</Label>
                                        <Input
                                            id="college"
                                            name="college"
                                            value={formData.college}
                                            onChange={handleInputChange}
                                            placeholder="Enter your college name"
                                            className="bg-gray-800/80 border-orange-900/50 text-gray-300"
                                        />
                                        {errors.college && (
                                            <p className="text-sm text-red-400 flex items-center gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.college}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Course and Year */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="course" className="text-gray-300">Course</Label>
                                        <Select
                                            value={formData.course}
                                            onValueChange={(value) => handleInputChange({ target: { name: 'course', value } })}
                                        >
                                            <SelectTrigger className="bg-gray-800/80 border-orange-900/50 text-gray-300">
                                                <SelectValue placeholder="Select your course" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {COURSES.map((course) => (
                                                    <SelectItem key={course} value={course}>
                                                        {course}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.course && (
                                            <p className="text-sm text-red-400 flex items-center gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.course}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="year" className="text-gray-300">Year</Label>
                                        <Select
                                            value={formData.year}
                                            onValueChange={(value) => handleInputChange({ target: { name: 'year', value } })}
                                        >
                                            <SelectTrigger className="bg-gray-800/80 border-orange-900/50 text-gray-300">
                                                <SelectValue placeholder="Select your year" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {YEARS.map((year) => (
                                                    <SelectItem key={year} value={year}>
                                                        {year}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.year && (
                                            <p className="text-sm text-red-400 flex items-center gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.year}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            {/* Submit Button */}
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-orange-500 to-cyan-500 hover:shadow-lg"
                            >
                                {isSubmitting ? (
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                ) : (
                                    'Register Now'
                                )}
                            </Button>

                            {/* Status Messages */}
                            {submitStatus && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex items-center justify-center gap-2 ${submitStatus === 'success' ? 'text-green-400' : 'text-red-400'
                                        }`}
                                >
                                    {submitStatus === 'success' ? (
                                        <>
                                            <CheckCircle2 className="w-5 h-5" />
                                            Registration successful! Check your email for confirmation.
                                        </>
                                    ) : (
                                        <>
                                            <AlertCircle className="w-5 h-4" />
                                            Something went wrong. Please try again.
                                        </>
                                    )}
                                </motion.p>
                            )}
                        </form>
                    </CardContent>
                </Card>

                {/* Top Left Corner - Paisley Pattern */}
                <div className="absolute -top-4 -left-4 w-24 sm:w-32 h-24 sm:h-32 pointer-events-none">
                    <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                                d="M0 0C30 0 40 10 40 40C40 70 20 80 0 80"
                                stroke="url(#paint0_linear)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                            <motion.path
                                d="M10 0C40 0 50 10 50 40C50 70 30 90 0 90"
                                stroke="url(#paint0_linear)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                            />
                            <defs>
                                <linearGradient id="paint0_linear" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#F97316" />
                                    <stop offset="1" stopColor="#06B6D4" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </motion.div>
                    <motion.div
                        className="absolute inset-0"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        <div className="w-16 h-16 border-t-2 border-l-2 border-orange-500/30 rounded-tl-3xl" />
                    </motion.div>
                </div>

                {/* Bottom Right Corner - Mandala Segment */}
                <div className="absolute -bottom-16 -right-4 w-24 sm:w-32 h-24 sm:h-32 pointer-events-none">
                    <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                                d="M100 100C70 100 60 90 60 60C60 30 80 20 100 20"
                                stroke="url(#paint1_linear)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                            <motion.path
                                d="M90 100C60 100 50 90 50 60C50 30 70 10 100 10"
                                stroke="url(#paint1_linear)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                            />
                            <motion.circle
                                cx="75"
                                cy="75"
                                r="8"
                                stroke="url(#paint1_linear)"
                                strokeWidth="1"
                                fill="none"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1, delay: 1 }}
                            />
                            <defs>
                                <linearGradient id="paint1_linear" x1="100" y1="100" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#06B6D4" />
                                    <stop offset="1" stopColor="#F97316" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </motion.div>
                    <motion.div
                        className="absolute inset-0"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 1
                        }}
                    >
                        <div className="w-16 h-16 border-b-2 border-r-2 border-cyan-500/30 rounded-br-3xl ml-auto mt-auto" />
                    </motion.div>
                </div>

                {/* Top Right Accent */}
                <motion.div
                    className="absolute -top-2 -right-2 w-20 sm:w-24 h-20 sm:h-24 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            d="M100 0C85 15 80 30 85 50C90 70 95 80 100 90"
                            stroke="url(#paint2_linear)"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 1 }}
                        />
                        <defs>
                            <linearGradient id="paint2_linear" x1="100" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F97316" />
                                <stop offset="1" stopColor="#06B6D4" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>

                {/* Bottom Left Accent */}
                <motion.div
                    className="absolute -bottom-2 -left-2 w-20 sm:w-24 h-20 sm:h-24 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            d="M0 100C15 85 20 70 15 50C10 30 5 20 0 10"
                            stroke="url(#paint3_linear)"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 1 }}
                        />
                        <defs>
                            <linearGradient id="paint3_linear" x1="0" y1="100" x2="100" y2="0" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#06B6D4" />
                                <stop offset="1" stopColor="#F97316" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default RegistrationPage;