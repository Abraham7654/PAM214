import javax.swing.*;

class inicioPAM {
    public String reglamentoPOO() {
        return "Reglamento POO:\n"
        + "1. Se requiere 80% de asistencia para tener derecho a evaluación parcial y 80% de trabajos en clase.\n"
        + "2. Se permiten 10 minutos de tolerancia y si el alumno llega después de este tiempo puede permanecer en la clase, "
        + "pero no se tomará la asistencia (Solamente en los horarios de inicio: 7:00 a.m y 14:00 p.m).\n"
        + "3. Las faltas deberán estar justificadas mediante el correo institucional con un plazo máximo de 24 horas posteriores "
        + "a la hora de falta en clase mediante correo del tutor(a), justificantes entregados fuera de la fecha límite no se aceptan, "
        + "únicamente se aceptarán recetas médicas y citatorios jurídicos.\n"
        + "4. Las tareas y trabajos deberán subirse al Classroom de forma individual y no se recibirán de manera extemporánea "
        + "(salvo previo justificante validado por el tutor).\n"
        + "5. Las tareas y trabajos deben presentarse en tiempo y forma. La demora de un trabajo o tarea sin justificante y/o con justificante fuera del límite no se acepta.\n"
        + "6. Utilizar el correo institucional para trabajar bajo la plataforma Google Classroom.\n"
        + "7. El plagio o copia de trabajos y/o exámenes será sancionado con reprobación de la asignatura y reporte al área correspondiente.\n"
        + "8. Cualquier deshonestidad académica será sancionada reprobando el parcial sin derecho a examen final.\n"
        + "9. En circunstancia de indisciplina o falta de respeto hacia docentes, administrativos, compañeros o cualquier persona perteneciente a la universidad, "
        + "se realizará una primera llamada de atención; si el alumno hace caso omiso tendrá que abandonar el aula. "
        + "Tres incidencias de este tipo = sin derecho a examen final o parcial.\n"
        + "10. El uso de laptops y/o dispositivos móviles quedará limitado a actividades que lo requieran.\n"
        + "11. Prohibido el uso de audífonos durante la clase.\n"
        + "12. Prohibido comer y/o tomar líquidos en el salón.\n"
        + "13. Prohibido sentarse encima de las mesas, así como columpiarse en las sillas.\n"
        + "14. Todo tema académico debe ser revisado primeramente con el docente; de no resolverse, con el tutor; después con la coordinación de tutores; "
        + "y en última instancia con la dirección del programa educativo.\n"
        + "15. Cualquier situación no prevista en este reglamento deberá resolverse directamente con la dirección del programa educativo.\n"
        + "16. El día destinado a entrega de calificaciones todos los estudiantes deben estar presentes; ese día se entregarán exámenes y se brindará retroalimentación.\n"
        + "17. Este reglamento entra en vigor después de ser firmado o aceptado por la mayoría de estudiantes asistentes a la primera sesión de la materia.";
    }

     public String lineamientosClassroom() 
     {
        return "Lineamientos Classroom:\n"
        + "- Entregar los trabajos para su revisión.\n"
        + "- Entregas en PDF.\n"
        + "- Avisos de clase.\n"
        + "- Entregas autorizadas con retraso = calificación máxima de 5.";
    }

      public String fechasParciales() 
      {
        return "Fechas de Parciales:\n"
        + "1er Parcial: 01-10-25\n"
        + "2do Parcial: 05-10-25\n"
        + "3er Parcial: 03-12-25\n"
        + "Examen Final: 08-12-25";
    }

    public String porcentajesPorParcial() {
        return "Porcentajes por Parcial:\n\n"
        + "1er Parcial:\n"
        + "- Evidencia de Conocimiento: 40%\n"
        + "- Evidencia de Desempeño: 20%\n"
        + "- Evidencia de Producto: 30%\n"
        + "- Proyecto Integrador: 10%\n\n"
        + "2do Parcial:\n"
        + "- Evidencia de Conocimiento: 40%\n"
        + "- Evidencia de Desempeño: 20%\n"
        + "- Evidencia de Producto: 20%\n"
        + "- Proyecto Integrador: 20%\n\n"
        + "3er Parcial:\n"
        + "- Evidencia de Conocimiento: 20%\n"
        + "- Evidencia de Desempeño: 10%\n"
        + "- Evidencia de Producto: 40%\n"
        + "- Proyecto Integrador: 30%";
    }
}

public class InicioPAM {
    public static void main(String[] args) {
         inicioPAM pam = new inicioPAM();

        //Menu
        String opcion = JOptionPane.showInputDialog(
            "Selecciona una opción:\n"
            + "1. Reglamento POO\n"
            + "2. Lineamientos Classroom\n"
            + "3. Fechas de Parciales\n"
            + "4. Porcentajes por Parcial"
        );

        switch(opcion) {
            case "1":
                JOptionPane.showMessageDialog(null, pam.reglamentoPOO());
                break;
            case "2":
                JOptionPane.showMessageDialog(null, pam.lineamientosClassroom());
                break;
            case "3":
                JOptionPane.showMessageDialog(null, pam.fechasParciales());
                break;
            case "4":
                JOptionPane.showMessageDialog(null, pam.porcentajesPorParcial());
                break;
            default:
                JOptionPane.showMessageDialog(null, "Opción no válida.");
        }
    }
}
