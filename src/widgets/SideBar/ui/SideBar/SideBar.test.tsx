import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@shared/lib/tests/componentRender';
import SideBar from './SideBar';

describe('SideBar', () => {
  test('test default SideBar', () => {
    componentRender(<SideBar />);
    expect(screen.getByTestId('sidebar-testid')).toBeInTheDocument();
  });

  test('test toggle colapse', () => {
    componentRender(<SideBar />);
    const btnToggle = screen.getByTestId('sidebar-toggle-testid');
    expect(screen.getByTestId('sidebar-testid')).toBeInTheDocument();
    fireEvent.click(btnToggle);
    expect(screen.getByTestId('sidebar-testid')).toHaveClass('collapsed');
  });
});
