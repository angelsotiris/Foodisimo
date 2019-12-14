import React, { Component } from 'react'

import '../css/Allergens.css';


class Allergens extends Component {
    render() {
        return (
            this.props.page ? 
                <div className="allergens">
                    <h2>Πληροφορίες για Αλλεργιογόνα</h2>
                    <p>Μήπως έχεις αλλεργία ή δυσανεξία σε κάποιο φαγητό; Κάποια διατροφική ιδιαιτερότητα; Επικοινώνησε με το efood πριν βάλεις την παραγγελία σου προκειμένου να σε συνδέσουμε με το κατάστημα και να σου απαντήσουν οποιαδήποτε ερώτηση έχεις σχετικά με τον τρόπο μαγειρέματος και τα συστατικά που χρησιμοποιούν.</p>
                    <p>Τηλέφωνο efood: <strong><a href="tel:+30 2310 000 000">2310 000 000</a></strong></p>
                </div>    
            :
                null    
            
        );
    }
}
export default Allergens;