import { Student } from "../models/Student.js";

export const getStudents = async (req, res) => {
try {
 const students = await Student.findAll()
    res.json(students)
} catch (error) {
    return res.status(500).json({message: error.message})
}
};

export const getStudent = async (req, res) => {
  try{
    const {id} = req.params;
    const student = await Student.findByPk(id)
    res.json(student)
  } catch(error){
    return res.status(500).json({message: error.message})
  }
}

export const createStudent = async (req, res) => {
try{
  const {
    firstName,
    lastName,
    dniStudent,
    adress,
    fatherName,
    fatherLastName,
    fatherDni,
    fatherProfession,
    fatherTelephone,
    fatherEmail,
    motherName,
    motherLastName,
    motherDni,
    motherProfession,
    motherTelephone,
    motherEmail,
    observation,
    oneOtherPersonName,
    oneOtherPersonLastName,
    oneOtherPersonDni,
    oneOtherPersonTelephone,
    twoOtherPersonName,
    twoOtherPersonLastName,
    twoOtherPersonDni,
    twoOtherPersonTelephone,
  } = req.body;

  const newStudent = await Student.create({
    firstName,
    lastName,
    dniStudent,
    adress,
    fatherName,
    fatherLastName,
    fatherDni,
    fatherProfession,
    fatherTelephone,
    fatherEmail,
    motherName,
    motherLastName,
    motherDni,
    motherProfession,
    motherTelephone,
    motherEmail,
    observation,
    oneOtherPersonName,
    oneOtherPersonLastName,
    oneOtherPersonDni,
    oneOtherPersonTelephone,
    twoOtherPersonName,
    twoOtherPersonLastName,
    twoOtherPersonDni,
    twoOtherPersonTelephone,
  });
  res.json(newStudent);
} catch (error) {
    return res.status(500).json({message: error.message})
}
};

export const updateStudent  = async (req, res) => {
  try{
    const {id} = req.params;
    const {firstName,
      lastName,
      dniStudent,
      adress,
      fatherName,
      fatherLastName,
      fatherDni,
      fatherProfession,
      fatherTelephone,
      fatherEmail,
      motherName,
      motherLastName,
      motherDni,
      motherProfession,
      motherTelephone,
      motherEmail,
      observation,
      oneOtherPersonName,
      oneOtherPersonLastName,
      oneOtherPersonDni,
      oneOtherPersonTelephone,
      twoOtherPersonName,
      twoOtherPersonLastName,
      twoOtherPersonDni,
      twoOtherPersonTelephone,} = req.body

    const student = await Student.findByPk(id) 
    student.firstName = firstName,
    student.lastName = lastName,
    student.dniStudent = dniStudent,
    student.adress = adress,
    student.fatherName = fatherName,
    student.fatherLastName = fatherLastName,
    student.fatherDni = fatherDni,
    student.fatherProfession = fatherProfession,
    student.fatherTelephone = fatherTelephone,
    student.fatherEmail = fatherEmail,
    student.motherName = motherName,
    student.motherLastName = motherLastName,
    student.motherDni = motherDni,
    student.motherProfession = motherProfession,
    student.motherTelephone = motherTelephone,
    student.motherEmail = motherEmail,
    student.observation = observation,
    student.oneOtherPersonName = oneOtherPersonName,
    student.oneOtherPersonLastName = oneOtherPersonLastName,
    student.oneOtherPersonDni = oneOtherPersonDni,
    student.oneOtherPersonTelephone = oneOtherPersonTelephone,
    student.twoOtherPersonName = twoOtherPersonName,
    student.twoOtherPersonLastName = twoOtherPersonLastName,
    student.twoOtherPersonDni = twoOtherPersonDni,
    student.twoOtherPersonTelephone = twoOtherPersonTelephone
    await student.save()
    res.json(student)
  } catch(error) {
    return res.status(500).json({message: error.message})
  }
}

export const deleteStudent  = async (req, res) => {
  try {
  const {id} = req.params;
  await Student.destroy({
    where: {
      id,
    }
  })
  res.sendStatus(204)
  } catch {
    return res.status(500).json({message: error.message})
  }
};