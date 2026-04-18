# Write your MySQL query statement below
Select S.student_id, S.student_name, Su.subject_name, COUNT(E.subject_name) AS attended_exams
FROM Students S 
CROSS JOIN Subjects Su
LEFT JOIN Examinations E ON S.student_id = E.student_id AND Su.subject_name = E.subject_name
GROUP By S.student_id, Su.subject_name
ORDER by S.student_id, Su.subject_name ASC;
