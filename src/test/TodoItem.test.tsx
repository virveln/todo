import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/dom'
import { render } from "@testing-library/react";
import { Todo } from '../components/types';
import TaskProgressBar from "../components/TaskProgressBar";

describe('TodoItem Component Test Suit', () => {

    const mockOnStatusChange = jest.fn();

    const renderComponent = (status: Todo['status']) => {
        render(
            <TaskProgressBar
                status={status}
                onStatusChange={mockOnStatusChange}
            />
        );
    };

    it('should render all status steps correctly', () => {
        renderComponent("todo");

        expect(screen.getByTestId("todo")).toBeInTheDocument();
        expect(screen.getByTestId("in-progress")).toBeInTheDocument();
        expect(screen.getByTestId("completed")).toBeInTheDocument();
    });

    it('should highlight the correct circles based on the current status', () => {
        renderComponent("in-progress");

        const todoCircle = screen.getByTestId("todo");
        const inProgressCircle = screen.getByTestId("in-progress");
        const completedCircle = screen.getByTestId("completed");

        expect(todoCircle).toHaveClass("filled");
        expect(inProgressCircle).toHaveClass("filled");
        expect(completedCircle).not.toHaveClass("filled");
    });

    it('should call onStatusChange when a circle is clicked', () => {
        renderComponent("todo");

        const inProgressCircle = screen.getByTestId("in-progress");
        fireEvent.click(inProgressCircle);

        expect(mockOnStatusChange).toHaveBeenCalledWith("in-progress");

    });

    it('should render lines between steps correctly based on status', () => {
        renderComponent("completed");

        const lines = screen.getAllByTestId("line");
        expect(lines[0]).toHaveClass("filled");
        expect(lines[1]).toHaveClass("filled");
    });
});