import React from 'react';
import burgerStyles from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

const burgerIngredient = (props) => {
    let ingredient = null;

    switch(props.type){
        case('bread-bottom'):
            ingredient = <div className={burgerStyles.BreadBottom}></div>;
            break;

        case('bread-top'):
            ingredient = (
            <div className={burgerStyles.BreadTop}>
                <div className={burgerStyles.Seeds1}></div>
                <div className={burgerStyles.Seeds2}></div>
            </div>
            );
            break;
        case('meat'):
            ingredient = <div className={burgerStyles.Meat}></div>;
            break;
        case('cheese'):
                ingredient = <div className={burgerStyles.Cheese}></div>;
                break;
        case('salad'):
                ingredient = <div className={burgerStyles.Salad}></div>;
                break;
        case('bacon'):
                ingredient = <div className={burgerStyles.Bacon}></div>;
                break;
        default:
            ingredient = null;

    }

    return ingredient;

};

burgerIngredient.propTypes = {
    type : PropTypes.string.isRequired
};


export default burgerIngredient