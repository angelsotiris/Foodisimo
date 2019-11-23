import React, { Component } from 'react'

import '../css/Info.css';


class Info extends Component {
    render() {
        return (
            <div style={this.props.page ? {display:"block"} : {display:"none"}} className="infos">
                <h3>Κάνεις την παραγγελία σου</h3>
                <p>Βάλε τη διεύθυνσή σου στο πεδίο αναζήτησης και δες όλα τα εστιατόρια που διανέμουν φαγητό στηνπεριοχή σου.Επίλεξε το εστιατόριο που σου αρέσει. Δες το μενού του εστιατορίου και πρόσθεσε τα πιάτα που επιθυμείς στο καλάθι σου με ένα click.</p>
                <h3>Στέλνουμε την παραγγελία σου στο εστιατόριο</h3>
                <p>Μόλις ολοκληρώσεις την παραγγελία σου, εκτυπώνεται αυτόματα στο εστιατόριο. Εσύ ενημερώνεσαι άμεσα στην οθόνη σου ότι η παραγγελία έγινε αποδεκτή. Στη συνέχεια λαμβάνεις ένα e-mail με όλα τα στοιχεία της παραγγελίας και το χρόνο παράδοσης.</p>
                <h3>Το φαγητό σας… έφτασε!</h3>
                <p>Το φαγητό παραδίδεται από το εστιατόριο στην πόρτα σου και εσύ πληρώνεις παραδοσιακά με μετρητά (εάν δεν έχεις ήδη πληρώσει με την πιστωτική σου κάρτα κατά τη διάρκεια της παραγγελίας). Η υπηρεσία του efood παρέχεται εντελώς δωρεάν!</p>
            </div>         
        );
    }
}
export default Info;