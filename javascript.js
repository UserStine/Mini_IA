// Patient Collection
{
    "_id": ObjectId("patient_id"),
    "surname": "PatientSurname",
    "otherNames": "PatientOtherNames",
    "gender": "Male/Female/Other",
    "phone": "PatientPhoneNumber",
    "address": "ResidentialAddress",
    "emergencyContact": {
      "name": "EmergencyContactName",
      "phone": "EmergencyContactPhone",
      "relationship": "RelationWithPatient"
    }
  }
  
  // Encounter Collection
  {
    "_id": ObjectId("encounter_id"),
    "patientId": ObjectId("patient_id"),
    "dateTime": ISODate("EncounterDateTime"),
    "type": "Emergency/OPD/SpecialistCare"
  }
  
  // Vitals Collection
  {
    "_id": ObjectId("vitals_id"),
    "patientId": ObjectId("patient_id"),
    "bloodPressure": "120/80",
    "temperature": 98.6,
    "pulse": 75,
    "spo2": 98
  }