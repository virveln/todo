import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/dom'
import { render } from "@testing-library/react";
import StatusCounterFilter from "../components/StatusCounterFilter";

const mockSetFilter = jest.fn();

describe('StatusCounterFilter Component Test Suit' , () => {

    it('should render the correct number of todos for each status', () => {
        render(
            <StatusCounterFilter 
                todoCount={5}
                inProgressCount={3}
                completedCount={2}
                setFilter={mockSetFilter}
                />
        );

        expect(screen.getByText("Todo")).toBeInTheDocument();
        expect(screen.getByText("5")).toBeInTheDocument();
        expect(screen.getByText("In Progress")).toBeInTheDocument();
        expect(screen.getByText("3")).toBeInTheDocument();
        expect(screen.getByText("Completed")).toBeInTheDocument();
        expect(screen.getByText("2")).toBeInTheDocument();
    });

    it('should update the active filter when a status button is clicked', () => {
        render(
            <StatusCounterFilter 
                todoCount={5}
                inProgressCount={3}
                completedCount={2}
                setFilter={mockSetFilter}
                />
        );

        fireEvent.click(screen.getByTestId("in-progress"));

        expect(screen.getByTestId("in-progress")).toHaveClass("active");
    });

    it('should call setFilter with the correct status when a button is clicked', () => {
        render(
            <StatusCounterFilter 
              todoCount={5} 
              inProgressCount={3} 
              completedCount={2} 
              setFilter={mockSetFilter} 
            />
          );

          fireEvent.click(screen.getByTestId("todo"));

          expect(mockSetFilter).toHaveBeenCalledWith("todo");
    });

    it('should reset the filter when "See all Tasks" is clicked', () => {
        render(
            <StatusCounterFilter 
              todoCount={5} 
              inProgressCount={3} 
              completedCount={2} 
              setFilter={mockSetFilter} 
            />
          );

          fireEvent.click(screen.getByTestId("see-all-tasks"));

          expect(mockSetFilter).toHaveBeenCalledWith(null);
    });
});