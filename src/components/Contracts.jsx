// src/components/Contracts.jsx
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contracts = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    age: '',
    sex: '', // Male, Female, Other
    mobileNumber: '',
    nationality: '',
    email: '',
    currentAddress: '',
    aadharNumber: '',
    profession: '',
    spouseName: '', // Optional
    areaSqFt: '',
    buildingType: 'Residential', // Default: Residential, Commercial
  });

  const [errors, setErrors] = useState({});

  // Calculate age automatically when DOB changes
  useEffect(() => {
    if (formData.dob) {
      const birthDate = new Date(formData.dob);
      const today = new Date();
      let ageCalc = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        ageCalc--;
      }
      setFormData(prev => ({ ...prev, age: ageCalc >= 0 ? ageCalc.toString() : '' }));
    } else {
      setFormData(prev => ({ ...prev, age: '' }));
    }
  }, [formData.dob]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
     // Clear specific error when user starts typing
     if (errors[name]) {
        setErrors(prev => ({...prev, [name]: null}));
    }
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
        setErrors(prev => ({...prev, [name]: null}));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!formData.dob) newErrors.dob = 'Date of birth is required.';
    else if (parseInt(formData.age, 10) < 0) newErrors.dob = 'Please enter a valid date of birth.';
    if (!formData.sex) newErrors.sex = 'Please select your sex.';
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = 'Mobile number is required.';
    else if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = 'Mobile number must be 10 digits.';
    if (!formData.nationality.trim()) newErrors.nationality = 'Nationality is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid.';
    if (!formData.currentAddress.trim()) newErrors.currentAddress = 'Current address is required.';
    if (!formData.aadharNumber.trim()) newErrors.aadharNumber = 'Aadhar number is required.';
    else if (!/^\d{12}$/.test(formData.aadharNumber)) newErrors.aadharNumber = 'Aadhar number must be 12 digits.';
    if (!formData.profession.trim()) newErrors.profession = 'Profession is required.';
    if (!formData.areaSqFt.trim()) newErrors.areaSqFt = 'Area in sq ft is required.';
    else if (isNaN(formData.areaSqFt) || Number(formData.areaSqFt) <= 0) newErrors.areaSqFt = 'Area must be a valid positive number.';
    if (!formData.buildingType) newErrors.buildingType = 'Please select a building type.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Contract Form Data Submitted:', formData);
      alert('Contract application submitted successfully! We will review your details and get back to you.');
      // Here, you would typically send formData to a backend API
      // Optionally, reset the form:
      // setFormData({
      //   firstName: '', lastName: '', dob: '', age: '', sex: '',
      //   mobileNumber: '', nationality: '', email: '', currentAddress: '',
      //   aadharNumber: '', profession: '', spouseName: '', areaSqFt: '',
      //   buildingType: 'Residential',
      // });
      // setErrors({});
    } else {
      console.log('Form validation failed:', errors);
      alert('Please correct the errors highlighted in the form.');
    }
  };

  return (
    <div className="container my-5"> {/* Added my-5 for margin top and bottom */}
      <h2 className="mb-4 text-center">Contract Application Form</h2>
      <p className="mb-4 text-muted text-center">
        Please fill out the details below to apply for a contract. All fields marked with an asterisk (*) are mandatory.
      </p>
      <Form onSubmit={handleSubmit} noValidate>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="contractFirstName">
            <Form.Label>First Name *</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              isInvalid={!!errors.firstName}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="contractLastName">
            <Form.Label>Last Name *</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              isInvalid={!!errors.lastName}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="contractDOB">
            <Form.Label>Date of Birth *</Form.Label>
            <Form.Control
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              isInvalid={!!errors.dob}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.dob}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="contractAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              name="age"
              value={formData.age}
              readOnly
              disabled
              placeholder="(Auto-calculated)"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="contractSex">
            <Form.Label>Sex *</Form.Label>
            <div>
              {['Male', 'Female', 'Other'].map((gender) => (
                <Form.Check
                  inline
                  key={gender}
                  label={gender}
                  name="sex"
                  type="radio"
                  id={`contractSex-${gender}`}
                  value={gender}
                  checked={formData.sex === gender}
                  onChange={handleRadioChange}
                  isInvalid={!!errors.sex}
                  required
                />
              ))}
            </div>
            {errors.sex && <div className="invalid-feedback d-block">{errors.sex}</div>}
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="contractMobileNumber">
            <Form.Label>Mobile Number *</Form.Label>
            <Form.Control
              type="tel"
              name="mobileNumber"
              placeholder="e.g., 9876543210"
              value={formData.mobileNumber}
              onChange={handleChange}
              isInvalid={!!errors.mobileNumber}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.mobileNumber}</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="contractNationality">
            <Form.Label>Nationality *</Form.Label>
            <Form.Control
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              isInvalid={!!errors.nationality}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.nationality}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="contractEmail">
            <Form.Label>Email Address *</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="e.g., user@example.com"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="contractCurrentAddress">
          <Form.Label>Current Address *</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="currentAddress"
            value={formData.currentAddress}
            onChange={handleChange}
            isInvalid={!!errors.currentAddress}
            required
          />
          <Form.Control.Feedback type="invalid">{errors.currentAddress}</Form.Control.Feedback>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="contractAadharNumber">
            <Form.Label>Aadhar Number *</Form.Label>
            <Form.Control
              type="text"
              name="aadharNumber"
              placeholder="12-digit number"
              value={formData.aadharNumber}
              onChange={handleChange}
              isInvalid={!!errors.aadharNumber}
              maxLength="12"
              required
            />
            <Form.Control.Feedback type="invalid">{errors.aadharNumber}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="contractProfession">
            <Form.Label>Profession *</Form.Label>
            <Form.Control
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              isInvalid={!!errors.profession}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.profession}</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="contractSpouseName">
            <Form.Label>Spouse's Name (Optional)</Form.Label>
            <Form.Control
              type="text"
              name="spouseName"
              value={formData.spouseName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="contractAreaSqFt">
            <Form.Label>Area in sq ft *</Form.Label>
            <Form.Control
              type="number"
              name="areaSqFt"
              value={formData.areaSqFt}
              onChange={handleChange}
              isInvalid={!!errors.areaSqFt}
              min="1"
              required
            />
            <Form.Control.Feedback type="invalid">{errors.areaSqFt}</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-4" controlId="contractBuildingType">
          <Form.Label>Building Type *</Form.Label>
          <div>
            {['Residential', 'Commercial'].map((type) => (
              <Form.Check
                inline
                key={type}
                label={type}
                name="buildingType"
                type="radio"
                id={`contractBuildingType-${type}`}
                value={type}
                checked={formData.buildingType === type}
                onChange={handleRadioChange}
                isInvalid={!!errors.buildingType}
                required
              />
            ))}
          </div>
          {errors.buildingType && <div className="invalid-feedback d-block">{errors.buildingType}</div>}
        </Form.Group>

        <div className="text-center">
            <Button variant="primary" type="submit" size="lg">
            Submit Application
            </Button>
        </div>
      </Form>
    </div>
  );
};

export default Contracts;