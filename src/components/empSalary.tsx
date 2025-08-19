import React, { useState } from 'react';
import { User, DollarSign, Calendar, TrendingUp, TrendingDown, Eye, EyeOff } from 'lucide-react';

const EmployeeSalaryDashboard = () => {
    const [showDetails, setShowDetails] = useState(true);
    const [selectedMonth, setSelectedMonth] = useState('March 2024');

    // Sample employee data
    const employee = {
        name: "Prince Kumar Jha",
        employeeId: "EMP-2024-001",
        designation: "Senior Software Engineer",
        department: "Engineering",
        joinDate: "Jan 15, 2022",
        profileImage: "https://media.istockphoto.com/id/2208002590/photo/concentrated-latin-hispanic-woman-using-computer-technology-for-work-online-young.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z_Cjq3hKxnFnQ9xSOHD3NWvDJgRTB6LWTgsLGNjSYCE="
    };

    // Sample salary data
    const salaryData = {
        basicSalary: 75000,
        hra: 22500,
        transportAllowance: 3000,
        medicalAllowance: 2500,
        specialAllowance: 15000,
        grossSalary: 118000,

        // Deductions
        pf: 9000,
        esi: 945,
        professionalTax: 200,
        incomeTax: 12500,
        totalDeductions: 22645,

        netSalary: 95355
    };

    const months = [
        'March 2024', 'February 2024', 'January 2024', 'December 2023'
    ];

    const toggleDetails = () => setShowDetails(!showDetails);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                            <div className="relative">
                                <img
                                    src={employee.profileImage}
                                    alt={employee.name}
                                    className="w-20 h-20 rounded-full object-cover border-4 border-indigo-100"
                                />
                                <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800">{employee.name}</h1>
                                <p className="text-indigo-600 font-semibold text-lg">{employee.designation}</p>
                                <p className="text-gray-500">{employee.department} • ID: {employee.employeeId}</p>
                                <p className="text-sm text-gray-400 mt-1">Joined {employee.joinDate}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center space-x-4">
                                <select
                                    value={selectedMonth}
                                    onChange={(e) => setSelectedMonth(e.target.value)}
                                    className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                >
                                    {months.map(month => (
                                        <option key={month} value={month}>{month}</option>
                                    ))}
                                </select>
                                <button
                                    onClick={toggleDetails}
                                    className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                                >
                                    {showDetails ? <EyeOff size={18} /> : <Eye size={18} />}
                                    <span>{showDetails ? 'Hide' : 'Show'} Details</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Salary Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-green-100 text-sm">Net Salary</p>
                                <p className="text-3xl font-bold">₹{salaryData.netSalary.toLocaleString()}</p>
                            </div>
                            <DollarSign className="w-12 h-12 text-green-200" />
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-blue-100 text-sm">Gross Salary</p>
                                <p className="text-3xl font-bold">₹{salaryData.grossSalary.toLocaleString()}</p>
                            </div>
                            <TrendingUp className="w-12 h-12 text-blue-200" />
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-red-100 text-sm">Total Deductions</p>
                                <p className="text-3xl font-bold">₹{salaryData.totalDeductions.toLocaleString()}</p>
                            </div>
                            <TrendingDown className="w-12 h-12 text-red-200" />
                        </div>
                    </div>
                </div>

                {/* Detailed Breakdown */}
                {showDetails && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Earnings */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <TrendingUp className="w-6 h-6 text-green-500 mr-3" />
                                Earnings
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { label: 'Basic Salary', amount: salaryData.basicSalary, color: 'bg-blue-500' },
                                    { label: 'House Rent Allowance (HRA)', amount: salaryData.hra, color: 'bg-green-500' },
                                    { label: 'Transport Allowance', amount: salaryData.transportAllowance, color: 'bg-purple-500' },
                                    { label: 'Medical Allowance', amount: salaryData.medicalAllowance, color: 'bg-yellow-500' },
                                    { label: 'Special Allowance', amount: salaryData.specialAllowance, color: 'bg-pink-500' }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                        <div className="flex items-center space-x-3">
                                            <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                                            <span className="font-medium text-gray-700">{item.label}</span>
                                        </div>
                                        <span className="font-bold text-gray-800">₹{item.amount.toLocaleString()}</span>
                                    </div>
                                ))}
                                <div className="border-t pt-4 mt-4">
                                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                                        <span className="font-bold text-green-800">Gross Salary</span>
                                        <span className="font-bold text-green-800 text-lg">₹{salaryData.grossSalary.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Deductions */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <TrendingDown className="w-6 h-6 text-red-500 mr-3" />
                                Deductions
                            </h2>
                            <div className="space-y-4">
                                {[
                                    {
                                        label: 'Provident Fund (PF)',
                                        amount: salaryData.pf,
                                        color: 'bg-red-500',
                                        description: '12% of Basic Salary'
                                    },
                                    {
                                        label: 'Employee State Insurance (ESI)',
                                        amount: salaryData.esi,
                                        color: 'bg-orange-500',
                                        description: '0.75% of Gross Salary'
                                    },
                                    {
                                        label: 'Professional Tax',
                                        amount: salaryData.professionalTax,
                                        color: 'bg-purple-500',
                                        description: 'State Government Tax'
                                    },
                                    {
                                        label: 'Income Tax (TDS)',
                                        amount: salaryData.incomeTax,
                                        color: 'bg-indigo-500',
                                        description: 'As per IT Slab'
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                        <div className="flex items-center space-x-3">
                                            <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                                            <div>
                                                <div className="font-medium text-gray-700">{item.label}</div>
                                                <div className="text-xs text-gray-500">{item.description}</div>
                                            </div>
                                        </div>
                                        <span className="font-bold text-red-600">-₹{item.amount.toLocaleString()}</span>
                                    </div>
                                ))}
                                <div className="border-t pt-4 mt-4">
                                    <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl">
                                        <span className="font-bold text-red-800">Total Deductions</span>
                                        <span className="font-bold text-red-800 text-lg">-₹{salaryData.totalDeductions.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Net Salary Summary */}
                <div className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-lg text-indigo-100 mb-2">Net Salary for {selectedMonth}</h3>
                            <p className="text-4xl font-bold">₹{salaryData.netSalary.toLocaleString()}</p>
                            <p className="text-indigo-200 mt-2">
                                Gross: ₹{salaryData.grossSalary.toLocaleString()} - Deductions: ₹{salaryData.totalDeductions.toLocaleString()}
                            </p>
                        </div>
                        <div className="text-right">
                            <Calendar className="w-16 h-16 text-indigo-200 mb-2" />
                            <p className="text-indigo-200">Credited on</p>
                            <p className="font-semibold">Last Working Day</p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center text-gray-500 text-sm">
                    <p>This is a confidential salary statement. Please keep it secure.</p>
                    <p className="mt-1">Generated on {new Date().toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
};

export default EmployeeSalaryDashboard;