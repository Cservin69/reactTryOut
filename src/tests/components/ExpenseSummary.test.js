import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpenseSummary';

test('should correctly render ExpensesSummarry with 1 expense', () => {
const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
expect(wrapper).toMatchSnapshot();

});


test('should correctly render ExpensesSummarry with multiples expenses',
    () => {
        const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={23512340987}/>);
        expect(wrapper).toMatchSnapshot();

    });