// Studentinfo
// @Iustin Desrobitu 2526313

const StudentName = () =>
{
    return "Justin"
}

const CampusName = () =>
{
    return "Dockyards"
}

const StudentGrade = (marks) =>
{
    if( marks > 50 && marks < 70)
    {
        return "Grade B"
    }
    else
    {
        return "Grade A"
    }
}

const dob = "12/12/1980"

exports.StudentName=StudentName
exports.CampusName=CampusName
exports.dob=dob

exports.StudentGrade=StudentGrade
