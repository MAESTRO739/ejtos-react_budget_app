import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (event) => {
        dispatch({type: 'CHG_CURRENCY', payload: event.target.value});
    }

    return (
        <div className='row'>
            <div style={
                {backgroundColor: 'lightgreen', 
                 display: 'flex', 
                 flexFlow: 'row wrap',
                 justifyContent: 'center', 
                 marginLeft: "25px",
                 marginTop: "5px",
                 width: "250px",
                 borderRadius: "5px",
                }}>
                <span>
                    <label htmlFor='currency-dropdown' style={
                        {backgroundColor: "lightgreen", 
                         color: "#fff", 
                         padding: "5px",
                         fontSize: "1.5rem"
                        }
                        }>Currency</label>
                </span>
                <span style={{display: "flex", alignItems: "center"}}>
                    <span style={{color: "#fff", fontSize: "1.5rem", marginRight: "-9px", position: "relative", zIndex: "1"}}>{"("}</span>
                    <select id='currency-dropdown' style={
                        {appearance: "none", 
                         backgroundColor: "lightgreen",
                         color: "#fff",
                         padding: "5px",
                         border: "none",
                         cursor: "pointer",
                         fontSize: "1.5rem",
                         paddingRight: "30px",
                         paddingLeft: "10px",
                         outline: "none"
                        }
                        } onChange={event => changeCurrency(event)}>
                        <option defaultValue value='$' name='dollar'>$ Dollar</option>
                        <option value='£' name='pound'>£ Pound</option>
                        <option value='€' name='euro'>€ Euro</option>
                        <option value='₹' name='rupee'>₹ Rupee</option>
                    </select>
                    <span style={{color: "#fff", fontSize: "1.5rem", marginLeft: "-33px", position: "relative", zIndex: "1"}}>{")"}</span>
                    <span style={{
                        fontSize: "0.8rem",
                        color: "#fff",
                        marginLeft: "6px",
                        position: "relative",
                        zIndex: "1",
                    }}>▼</span>
                </span>
            </div>
        </div>
    );
};

export default Currency;