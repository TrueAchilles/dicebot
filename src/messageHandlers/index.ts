import { userConfigurationService } from '../service/index'

import { SaveConfigurationHandler } from './SaveConfigurationHandler';
import { GetConfigurationHandler } from './GetConfigurationHandler';
import { DiceRollParsingHandler } from './DiceRollParsingHandler';
import { MessageDispatcher } from './MessageDispatcher';
import { DeleteConfigurationHandler } from './DeleteConfigurationHandler';
import { HelpHandler } from './HelpHandler';

const saveConfigurationHandler: SaveConfigurationHandler = new SaveConfigurationHandler(userConfigurationService);
const getConfigurationhandler: GetConfigurationHandler = new GetConfigurationHandler(userConfigurationService);
const deleteConfigurationHandler: DeleteConfigurationHandler = new DeleteConfigurationHandler(userConfigurationService);
const helphandler: HelpHandler = new HelpHandler();
const defaultHandler: DiceRollParsingHandler = new DiceRollParsingHandler(userConfigurationService);

const dispatcher: MessageDispatcher = new MessageDispatcher([saveConfigurationHandler, getConfigurationhandler, deleteConfigurationHandler, helphandler], defaultHandler);

export { dispatcher };